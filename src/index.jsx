// vendo como o babel compila o nosso código

import React from "react"

const user = {
  name: "Renan",
}

console.log(user.address?.street)

function App(){
  return <h1>Hello</h1>
}

// comando para rodar o babel -> yarn babel ./src/index.js --out-file build/bundle.js