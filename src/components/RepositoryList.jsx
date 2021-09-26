import { RepositoryItem } from "./RepositoryItem"
const repository = { name: 'Exemplo', description: 'descrição', link: 'https://github.com/Renan1fps'}
export function RepositoryList(){
  return(
    <section>
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  )
}