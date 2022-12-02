import { ethers } from "ethers";
import { useState } from "react";
import { useTransaction } from "~/context";
import abi from "../abi/TaskContract.json";

export type TodoProps = {
  taskId: number;
  taskTitle: string;
  taskDescription: string;
  isDeleted: boolean;
};

type ReturnProps = {
  todo: any;
  getAllTodo(): Promise<TodoProps[]>;
  addTodo: (title: string, description: string) => Promise<TodoProps[]>;
  getTodo(taskId: number): void;
  updateTodo: (
    taskId: number,
    title: string,
    description: string
  ) => Promise<TodoProps[]>;
  deleteTodo(taskId: number): Promise<TodoProps[]>;
};

export const fetchData = (): ReturnProps => {
  const [todo, setTodo] = useState([]);
  const { setIsTransacting } = useTransaction();
  let TaskContract: ethers.Contract;
  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      TaskContract = new ethers.Contract(
        "0x8Dad96bf37BDACfAEABe46446aD09040cAeB8046",
        abi.abi,
        signer
      );
    } else {
      console.log("Ethereum object doesn't exist");
    }
  } catch (error) {
    console.error(error);
  }

  async function getAllTodo(): Promise<TodoProps[]> {
    try {
      const todo = await TaskContract.getTasks();
      console.log("get all todo running");
      setIsTransacting(false);
      return todo;
    } catch (error) {
      return error as any;
    }
  }

  async function addTodo(title: string, description: string) {
    try {
      setIsTransacting(true);
      const addedTodo = await TaskContract.addTask(title, description, false);
      await addedTodo.wait();
    } catch (error) {
      console.log(error);
    } finally {
      return await getAllTodo();
    }
  }

  async function getTodo(taskId: number) {
    try {
      const todoById = await TaskContract.getTask(taskId);
      setTodo(todoById);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateTodo(
    taskId: number,
    title: string,
    description: string
  ) {
    try {
      setIsTransacting(true);
      const updatedTodo = await TaskContract.updateTask(
        taskId,
        title,
        description
      );
      await updatedTodo.wait();
    } catch (error) {
      console.log(error);
    } finally {
      return await getAllTodo();
    }
  }

  async function deleteTodo(taskId: number) {
    try {
      setIsTransacting(true);
      const deleteTodo = await TaskContract.deleteTask(taskId);
      await deleteTodo.wait();
    } catch (error) {
      console.log(error);
    } finally {
      return await getAllTodo();
    }
  }

  return {
    todo,
    getAllTodo,
    addTodo,
    getTodo,
    updateTodo,
    deleteTodo,
  };
};
