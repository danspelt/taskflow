"use client";
import { useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { AiOutlinePlus } from "react-icons/ai";
const AddToDo = () => {
  const { addTask } = useAppContext();
  const [newTask, setNewTask] = useState("");

  const addTaskHandler = () => {
    const task = {
      id: new Date().getTime(),
      title: 'New Task',
      text: newTask,
      completed: false,
    }; 
    addTask(task);
    setNewTask("");
  }

  return (
    <div className="mb-4">
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Add a new task"
        value={newTask}
        autoCapitalize="on"
        autoFocus
        onKeyDown={(e) => {
          if (e.key === "Enter") addTaskHandler();
        }}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="btn btn-primary ml-2" onClick={addTaskHandler}>
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default AddToDo;
