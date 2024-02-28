import Image from "next/image";

export default function Footer(){
    return(
        <footer>
            
            <Image
            width={150}
            height={150}
            src={"https://www.ifms.edu.br/marcaifms.png"}
            
            />
            <p>Obrigado por visitar meu site</p>
        </footer>
    )
}