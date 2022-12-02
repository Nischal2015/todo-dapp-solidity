import { TodoProps } from "~/lib/fetchData";

type TodoObjectProps = {
  id: string;
  title: string;
  description: string;
  isDeleted: boolean;
};

export type JSONShapeProps = {
  todos: Record<string, TodoObjectProps>;
  columns: {
    completed: {
      id: string;
      title: string;
      taskIds: string[];
    };
  };
  columnOrder: string[];
};

export const apiDataShaper = (datas: TodoProps[]) => {
  let jsonShape: JSONShapeProps = {
    todos: {},
    columns: {
      completed: {
        id: "completed",
        title: "To Do",
        taskIds: [],
      },
    },
    columnOrder: ["completed"],
  };

  datas.map((data) => {
    const todoArrayKey = ["id", "title", "description", "isDeleted"];

    let todoObject: TodoObjectProps = {
      id: "",
      title: "",
      description: "",
      isDeleted: false,
    };

    const todoMapper = (todoArray: any) => {
      todoArray.forEach((item: number | string, index: number) => {
        if (index === 0 && typeof item === "number") {
          todoObject["id"] = `todo-${item + 1}`;
        } else if (typeof item === "string") {
          const indexer = todoArrayKey[index];
          // @ts-ignore
          todoObject[indexer] = item;
        }
      });
      return todoObject;
    };

    jsonShape.todos[`todo-${data.taskId + 1}`] = todoMapper(data);
    jsonShape.columns.completed.taskIds.push(`todo-${data.taskId + 1}`);
  });

  return jsonShape;
};
