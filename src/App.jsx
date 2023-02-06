import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useState, useEffect } from "react";
import { tasks as data } from "./data/tasks"; //se le puede asignar otro nombre con as

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []); //lo que se ejecuta cuando carga el componente TaskList

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

  return (
    <div>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
