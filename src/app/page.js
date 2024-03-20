
export default async function Home() {
const resposta = await fetch("http://localhost:3000/api", { next:{
  revalidate:1
}});
const campus = await resposta.json();
  return (
   
    <main>
      {
          campus.map( (campi)=>
           <header>
            <div >
            <p>{campi.nome_campi}</p>
           </div> 
           </header>
          )
      }
  
    </main>
  )
}
