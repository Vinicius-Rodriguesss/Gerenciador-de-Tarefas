import { ChevronLeftIcon } from "lucide-react";
import {  useNavigate, useSearchParams } from "react-router-dom";



const TaskPage = () => {

 const navigate = useNavigate();

 // Query params
 // Cria variaveis atráves da URL 
 const [searchParams] = useSearchParams();
 const title = searchParams.get("title");
 const description = searchParams.get("description");


 return (
  <>
   <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
    <div className="w-[500px] space-y-4">
     <div className="flex justify-center relative  mb-6">
      <button onClick={() => navigate(-1)} className="absolute left-0 bottom-0 text-slate-100"> <ChevronLeftIcon /> </button>
      <h1 className="text-3xl text-slate-100 font-bold text-center">Detalhes da Tarefa</h1>
     </div>

     <div className="bg-slate-200 p-4 rounded-md">
      <h2 className="text-xl  text-slate-600 font-bold">{title}</h2>
      <p className="text-slate-600">{description}</p>
      <p></p>
     </div>

    </div>
   </div>

  </>
 )
}
export default TaskPage;