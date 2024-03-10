"use client";
import { useAppContext } from "@/context/AppContext";
import { AiFillDelete } from "react-icons/ai";

import { Task } from "@/types";

const TodoList = () => {
  const { 
    tasks, 
    removeTask
  } = useAppContext();
  return (
    <ul>
      {tasks.map((task: Task) => (
        <li key={task.id} className="flex justify-between items-center mb-2">
          {task.text}
          <button className="btn btn-error" onClick={() => removeTask(task)}>
            <AiFillDelete />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;