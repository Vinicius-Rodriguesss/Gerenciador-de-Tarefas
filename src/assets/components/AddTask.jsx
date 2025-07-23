import { useState } from "react"

const AddTask = ({ AddTaskOn }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <div className="space-y-4 p-4 bg-slate-200 rounded-md shadow flex flex-col">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Tarefa"
          className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        />

        <input value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Descrição"
          className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        />

        <button onClick={() => {
          if (!title || !description) {
            return alert("Preencha todos os campos");
          }

          AddTaskOn(title, description)
          setTitle("");
          setDescription("")
        }
        } className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>
      </div >
    </>
  )
}

export default AddTask