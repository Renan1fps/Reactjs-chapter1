// vendo como o babel compila o nosso código

import React from "react"
import { App } from "./App"

 const user = {
  name: "Renan",
}

console.log(user.address?.street)

function Initial(){
  return <h1>Hello</h1>
}

// comando para rodar o babel -> yarn babel ./src/index.js --out-file build/bundle.js