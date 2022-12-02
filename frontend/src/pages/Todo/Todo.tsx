import { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { List } from "./List";
import { TodoProps } from "./Todo.d";
import { fetchData } from "~/lib/fetchData";

function Todo({ datas }: TodoProps) {
  const [initialData, setInitialData] = useState(datas);
  const { updateTodo } = fetchData();
  const onDragEnd = (result: any) => {
    const { draggableId, destination, source } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column =
      initialData.columns[source.droppableId as keyof typeof datas.columns];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newState = {
      ...initialData,
      columns: {
        ...initialData.columns,
        [newColumn.id]: newColumn,
      },
    };
    setInitialData(newState);
  };

  useEffect(() => {
    setInitialData(datas);
  }, [datas]);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {initialData.columnOrder.map((columnId) => {
        const column =
          initialData.columns[columnId as keyof typeof datas.columns];
        const tasks = column.taskIds.map(
          (taskId: string) =>
            initialData.todos[taskId as keyof typeof datas.todos]
        );
        return <List key={column.id} datas={tasks} column={column} />;
      })}
    </DragDropContext>
  );
}

export default Todo;
