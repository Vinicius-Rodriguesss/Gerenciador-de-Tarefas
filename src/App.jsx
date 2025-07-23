import { useEffect, useState } from "react";
import AddTask from "./assets/components/AddTask";
import Task from "./assets/components/Task";
import { v4 } from "uuid";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('task')) || []
  );

  //  Toda vez que o valor que esta dentro de -> [] (Lista) for alterado 
  // ele executa o primeiro paramentro que é a função 
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);


  // Se caso a Lista -> [], estiver vazio, quer dizer que 
  // Vai executar sempre que a pagina carregar 
  useEffect(() => {
    const fetchTask = async () => {
      // Chamar a API
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
        method: 'GET'
      });
      // Pegar os dados da API 
      const data = await response.json();

      // Armazenar os dados da api
      setTasks(data);
    }
    fetchTask()
  }, [])

  const onTaskClick = (taskID) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskID) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task;
    })
    setTasks(newTask);
  }

  const DeleteTask = (taskID) => {
    const newTaskList = tasks.filter(task => task.id !== taskID);
    setTasks(newTaskList);
  }

  //  ..tasks <- Tudo que esta dentro de tasks
  const AddTaskOn = (title, description) => {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false
    }
    setTasks([...tasks, newTask]);
  }


  return (
    <>
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
        <div className="w-[500px] space-y-4">
          <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
          <AddTask AddTaskOn={AddTaskOn} />
          <Task tasks={tasks} onTaskClick={onTaskClick} DeleteTask={DeleteTask} />
        </div>
      </div>
    </>
  );
}
export default App;