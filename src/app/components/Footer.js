import styles from "./css/footer.module.css"
import Image from "next/image";

export default function Footer(){
    return(
        
        <footer className={styles.pe}>
            
             <Image
            className={styles.imgfooter}
            width={80}
            height={80}
            src={"https://moodle.org/theme/moodleorg/pix/moodle_logo_TM.svg"}
            />

            <p>Obrigado por visitar meu site</p>
            
        </footer>
    )
}