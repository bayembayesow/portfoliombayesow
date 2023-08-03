import Formulaire from '@/components/Formulaire';
import Head from 'next/head';
import styles from '../styles/Contact.module.css';


const contact = () => {
    return <>

        <Head>
            <title>Portfolio | Contact</title>
            <meta name="description" content="Page de contact de mon porfolio permettant aux employeurs de communiquer avec moi tout en précisant leur nom, leur courriel,le sujet du message et une description du message " />
            <meta property="og: title" content="Portfolio | contact" />
            <meta property="og: description" content="Page de contact de mon porfolio permettant aux employeurs de communiquer avec moi tout en précisant leur nom, leur courriel,le sujet du message et une description du message " />
            <meta property="og: image" content="http:localhost:3000" />
        </Head>
        <section className={styles.centrer}>
            <h2 className={styles.titre}>Formulaire de Contact</h2>
            <Formulaire />
        </section>
    </>
};

export default contact;


