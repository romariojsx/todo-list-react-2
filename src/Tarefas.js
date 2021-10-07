import { useState } from "react"

export default function Tarefas({responsavel}) {

  // const tarefas = ["passear com o cachorro", "lavar a louça"]
  const [tarefas, setTarefas] = useState(["passear com o cachorro", "lavar a louça"])

  function adicionar(e) {
    e.preventDefault()
    const novaTarefa = e.target.querySelector("input").value

    tarefas = ["a", "b"]

    setTarefas([...tarefas, novaTarefa])

    e.target.querySelector("input").value = ""
  }

  return <div>
    <h1>Tarefas {responsavel}:</h1>
    <ul>
      {tarefas.map(t=><li key={t}>{t}</li>)}
    </ul>
    <form onSubmit={adicionar}>
      <input />
      <button>adicionar</button>
    </form>
  </div>;
}