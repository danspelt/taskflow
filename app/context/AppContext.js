"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  const value = {   
    tasks,
    addTask,
    removeTask,
  }; 
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  ); 
}