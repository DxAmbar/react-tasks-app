import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks"; //se le puede asignar otro nombre con as


export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  

  function createTask(task) {
    setTasks([
      ...tasks, //...tasks copia todos los elementos del arreglo, lo sgte agregará una tarea nueva
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId)); //se va a ir comparando el id para devolver un nuevo arreglo
  }

  useEffect(() => {
    setTasks(data);
  }, []); //lo que se ejecuta cuando carga el componente TaskList

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
