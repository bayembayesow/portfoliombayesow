import Link from "next/link";
import Menu from "./Menu";
import styles from '../styles/Header.module.css'
import image1 from '../public/téléc.png'
import Image from "next/image";




const Header = () => {
    return <>
        <header className={styles.header}>
            
            <Link href="/" className={styles.titre} >
            <div><Image src={image1} alt = "accueil" className={styles.img} ></Image></div>
            <h1>Portfolio</h1>
                
            </Link>
            
            
            
            <Menu className={styles.navbar} />
        </header>

    </>

};

export default Header;