import Image from "next/image";
export default async function Home() {
const resposta = await fetch("http://back-end-ifms.vercel.app/campi", { next:{
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
