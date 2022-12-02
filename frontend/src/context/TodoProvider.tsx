import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchData } from "~/lib/fetchData";

export type TodoProps = {
  taskId: number;
  taskTitle: string;
  taskDescription: string;
  isDeleted: boolean;
};

type TodoProviderProps = {
  children: ReactNode;
};

const TodoContext = createContext<
  | { todos: TodoProps[]; setTodos: Dispatch<SetStateAction<TodoProps[]>> }
  | undefined
>(undefined);

function TodoProvider({ children }: TodoProviderProps) {
  const { getAllTodo } = fetchData();
  const [todos, setTodos] = useState<TodoProps[]>([]);
  useEffect(() => {
    const getTodos = async () => {
      const data = await getAllTodo();
      setTodos(data);
    };

    getTodos();
  }, []);

  const value = { todos, setTodos };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
}

export { TodoProvider, useTodo };
