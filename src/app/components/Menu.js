import Link from "next/link"
import styles from "./css/menu.module.css";
import Image from "next/image";

export default function Menu(){
    return(
        <header className={styles.cabeca}>

            <Image
            className={styles.img}
            width={150}
            height={150}
            src={"https://www.ifms.edu.br/marcaifms.png"}
            />

            <nav className={styles.navbar}>
                <ul>
                    <Link href="/" className={styles.ul}><li>Home</li></Link>
                </ul>
                <ul>
                  <Link  href="/registro"  className={styles.ul}><li>Resgistrar</li></Link>
                </ul>
                    
            </nav>
        </header>
    )
}