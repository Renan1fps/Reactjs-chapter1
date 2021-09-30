import { useEffect, useState } from "react"
import { RepositoryItem } from "./RepositoryItem"
//https://api.github.com/orgs/rocketseat/repos

interface Repository{
  name: string,
  description: string,
  html_url: string
}

export function RepositoryList(){
  const [repositories, setRepositories] = useState<Repository[]>([])
 
  useEffect(()=>{
    const url ="https://api.github.com/orgs/rocketseat/repos"
    fetch(url).then(repos => repos.json()).then(data=>setRepositories(data))
  },[])
  return(
    <section>
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repo=>{
          return <RepositoryItem key={repo.name} repository={repo}/>
        })}
      </ul>
    </section>
  )
}