import Link from "next/link"
import styles from "./css/menu.module.css";
import Image from "next/image";

export default function Menu(){
    return(
        <header className={styles.cabecalho}>
            <Image
            width={150}
            height={150}
            src={"https://ead.ifms.edu.br/pluginfile.php/1/theme_moove/logo/1699458447/banner%20topo%20capa%20sem%20brasao.jpg"}
            />
            <nav>
                <ul>
                    <Link href="/"  className={styles.ul} ><li>Home</li></Link>
                    <Link  href="/registro"  className={styles.ul}><li>Resgistrar</li></Link>
                </ul>
            </nav>
        </header>
    )
}