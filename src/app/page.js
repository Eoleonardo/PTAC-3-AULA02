'use server'
import Image from "next/image";
export default async function Home() {
const url = "http://back-end-ifms.vercel.app/campi"; 

const resposta = await fetch(url, {
  cache:"no-cache",
  method:"GET",
  headers:{'Content-Type':'application/json'}
})


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
