import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Task = (props) => {

  const navigate = useNavigate();
  const onSeeDetailsClick = (task) => {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/Task?${query.toString()}`);
  }

  return (
    <>
      <ul className="space-y-4 p-4 bg-slate-200 rounded-md shadow">
        {props.tasks.map((task) =>
          <li key={task.id} className="flex gap-2" >
            {/* Botão que completa a tarefa */}
            <button onClick={() => props.onTaskClick(task.id)} className={`${task.isCompleted ? "line-through" : ""} bg-slate-400 w-full text-white text-left p-2 rounded-md`}>{task.title}
            </button>

            {/* Botão para ver a tarefa */}
            <button onClick={() => { onSeeDetailsClick(task) }} className="bg-slate-400 p-2 rounded-md text-white">
              <ChevronRightIcon />
            </button>

            {/* Botão que exclui a tarefa */}
            <button onClick={() => { props.DeleteTask(task.id) }} className="bg-slate-400 p-2 rounded-md text-white">
              <TrashIcon />
            </button>
          </li>)}
      </ul>
    </>
  );
}
export default Task;