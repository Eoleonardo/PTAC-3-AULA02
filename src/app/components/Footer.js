import styles from "./css/footer.module.css"
import Image from "next/image";

export default function Footer(){
    return(
        <footer className={styles.pe}>
            <p>Obrigado por visitar meu site</p>
        </footer>
    )
}