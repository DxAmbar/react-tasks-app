import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { useState, useEffect } from "react";
import { tasks as data } from "./tasks"; //se le puede asignar otro nombre con as

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []); //lo que se ejecuta cuando carga el componente TaskList

  function createTask(taskTitle) {
    setTasks([
      ...tasks, //...tasks copia todos los elementos del arreglo, lo sgte agregará una tarea nueva
      {
        title: taskTitle,
        id: tasks.length,
        description: "nueva tarea",
      },
    ]);
  }

  return (
    <div>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
