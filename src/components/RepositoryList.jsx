import { useEffect, useState } from "react"
import { RepositoryItem } from "./RepositoryItem"
const repository = { name: 'Exemplo', description: 'descrição', link: 'https://github.com/Renan1fps'}
//https://api.github.com/orgs/rocketseat/repos

export function RepositoryList(){
  const [repositories, setRepositories] = useState([])
  console.log(repositories)

  useEffect(()=>{
    const url ="https://api.github.com/orgs/rocketseat/repos"
    fetch(url).then(repos => repos.json()).then(data=>setRepositories(data))
  },[])
  return(
    <section>
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  )
}