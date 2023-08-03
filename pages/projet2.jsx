import styles from '../styles/Projet.module.css';
import Image from 'next/image';
import image1 from '../public/Proj21.png';
import image2 from '../public/Proj22.png';
import image3 from '../public/Proj23.png';
import image4 from '../public/Proj24.png';
import image5 from '../public/Proj25.png';
import image6 from '../public/Proj26.png';
import Head from 'next/head';
const Projet2 = () => {
    return <>
        <Head>
            <title>Portfolio | Projet2</title>
            <meta name="description" content="Page d&apos;accueil de mon porfolio présentant une description de mon projet2 portant sur une analyse des données de la direction de la monnaie et du crédit. Ce projet a pour objectif de mettre en place un système d'information décisionnel pour faciliter la gestion des demandes de prêts et d'avances accordées aux fonctionnaires de l'État." />
            <meta property="og: title" content="Portfolio | Projet2" />
            <meta property="og: description" content="Page d&apos;accueil de mon porfolio présentant une description de mon projet2 portant sur une analyse des données de la direction de la monnaie et du crédit. Ce projet a pour objectif de mettre en place un système d'information décisionnel pour faciliter la gestion des demandes de prêts et d'avances accordées aux fonctionnaires de l'État." />
            <meta property="og: image" content="http:localhost:3000/Proj24.png" />
        </Head>
        <div className={styles.pagewrapper}>

            <div className={styles.contentwrapper}>
                <header className={styles.header}>

                </header>

                <main className={styles.main}>
                    <h2 className={styles.titre}>Mise en place d&apos;un systeme d&apos;information décisionnel pour les demandes de prets et avances de la DMC</h2>
                    <div className={styles.advert}>
                        <div className={styles.winter}>
                            <h2>De quoi s&apos;agit -il ?</h2>
                            <p>
                                Durant les quatorze dernières années, l&apos;informatique décisionnelle a prouvé sa
                                capacité à simuler l&apos;avenir et à anticiper les tendances du marché. En effet,
                                elle offre aux responsables la possibilité de maitriser l’information
                                stratégique et de rehausser leurs performances.
                                Notre projet de fin d&apos;études au sein du Ministère de l&apos;Economie,
                                des Finances et du Plan (MEFP) s’aligne parfaitement sur cette vision.
                                L&apos;objectif de notre projet est de mettre en place une solution décisionnelle
                                qui puisse permettre la préparation des actes d’engagement et d&apos;ordonnancement
                                relatifs aux prêts et avances accordés aux fonctionnaires de l&apos;état.


                            </p>
                        </div>
                        <div className={styles.sled}>
                            <h2>Langages utilisés</h2>
                            <nav>
                                <ul>
                                    <a href="https://christian-manzoni.developpez.com/tutoriels/business-intelligence/creation-univers-bo/" className={styles.a1}><li>Designer</li></a>
                                    <a href="https://sql.sh/" className={styles.a2}><li>SQL Server</li></a>
                                    <a href="https://www.ibm.com/docs/en/bpm/8.5.5?topic=objects-business" className={styles.a3}> <li>Business Object</li></a>

                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className={styles.galerie}>
                        <Image src={image1} alt='Environnement-decisionnelle'  ></Image>
                        <Image src={image2} alt='Etape-realisation' ></Image>
                        <Image src={image3} alt='Driver-ODBC'></Image>
                        <Image src={image4} alt='table-graphique' ></Image>
                        <Image src={image5} alt='beneficiaire-pret'></Image>
                        <Image src={image6} alt='diagramme-analyse' ></Image>

                    </div>
                </main>


            </div>
        </div>



    </>
};

export default Projet2;