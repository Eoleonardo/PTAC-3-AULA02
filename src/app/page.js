
export default async function Home() {
const resposta = await fetch("http://localhost:3000/api");
const campus = await resposta.json();
  return (
    <main>
      {
          campus.map( (campi)=>
           <div>
            <p>{campi.nome_campi}</p>
           </div>
          )
      }
  
    </main>
  )
}
