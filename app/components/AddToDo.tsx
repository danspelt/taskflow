"use client";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
const AddToDo = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<{ id: number; text: string }[]>([]);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask }]);
    setNewTask("");
  };

  return (
    <div className="mb-4">
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="btn btn-primary ml-2" onClick={addTask}>
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default AddToDo;
