
import Link from 'next/link';
import styles from '../styles/Menu.module.css'

const Menu = () => {
    return <nav className={styles.navbar}>
        <div className={styles.menu}>
            <ul >

                <li>
                    <Link href="/projet1">
                        Projet1
                    </Link>

                </li>
                <li>
                    <Link href="/projet2">
                        Projet2
                    </Link>

                </li>
                <li>
                    <Link href="/contact">
                        Contact
                    </Link>

                </li>
                <li>
                    <Link href="/Temoignage">
                        Temoignages
                    </Link>

                </li>


            </ul>
        </div>

    </nav>
};

export default Menu;