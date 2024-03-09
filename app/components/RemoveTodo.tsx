"use client";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
const RemoveTodo = () => {
  const [tasks, setTasks] = useState<{ id: number; text: string }[]>([]);

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between items-center mb-2">
          {task.text}
          <button className="btn btn-error" onClick={() => deleteTask(task.id)}>
            <AiFillDelete />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default RemoveTodo;