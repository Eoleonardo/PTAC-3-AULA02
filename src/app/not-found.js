import  Link  from "next/link";

export default function NotFound(){
    return(
        <div>
             <h1>ERROR!</h1>
       <Link href="/">Retornar para home</Link>
        </div>
    );
}