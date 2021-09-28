import { useState } from "react"

export function Counter(){
  const [counter, setCounter]= useState(0)
  const teste = 0

  function handleIncrement(){
    setCounter(counter +1)
    teste += 1
  }

  return(
    <div>
      <h2>{counter}</h2>
      <h2>{teste}</h2> {/*Não é atualizada na tela */}
      <button type="button" onClick={handleIncrement}>increment</button>
    </div>
  )
}