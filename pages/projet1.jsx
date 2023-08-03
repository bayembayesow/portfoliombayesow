import React from 'react';
import styles from '../styles/Projet.module.css'
import Image from 'next/image';
import image1 from '../public/Image1.png'
import image2 from '../public/Image2.png'
import image3 from '../public/Image3.png'
import image4 from '../public/Image4.png'
import image5 from '../public/Image5.png'
import image6 from '../public/Image6.png'
import Head from 'next/head';


const Projet1 = () => {
    return <>

        <Head>
            <title>Portfolio | Projet 1</title>
            <meta name="description" content="Page d&apos;accueil de mon portfolio présentant une description de mon projet1 portant sur les prises de rendez-vous médicales afin de consulter un médecin. Ce projet utilise des technologies telles que  HTML et CSS, et comprend une galerie d'images illustrant les différentes fonctionnalités du site web de prise de rendez-vous médicaux." />
            <meta property="og: title" content="Portfolio | Projet1" />
            <meta property="og: description" content="Page d&apos;accueil de mon portfolio présentant une description de mon projet1 portant sur les prises de rendez-vous médicales afin de consulter un médecin. Ce projet utilise des technologies telles que PHP, SQL, HTML et CSS, et comprend une galerie d'images illustrant les différentes fonctionnalités du site web de prise de rendez-vous médicaux." />
            <meta property="og: image" content="http:localhost:3000/image1.png" />
        </Head>
        <div className={styles.pagewrapper}>

            <div className={styles.contentwrapper}>

                <main className={styles.main}>
                    <h2 className={styles.titre}>Rendez-vous sante quebec</h2>
                    <div className={styles.advert}>
                        <div className={styles.winter}>
                            <h2>De quoi s’agit -il ?</h2>
                            <p>
                                De nos jours, il est difficile pour des patients atteints de maladie
                                particulière de pouvoir prendre rendez-vous et même de rencontrer un médecin.
                                Cet état de fait s&apos;est accentue ces dernières années avec l&apos;avènement de la pandémie
                                du coronavirus. Cette dernière a créé un faussée encore plus large dans les rencontres
                                entre patients et médecin. RDV-sante est un terme qui signifie RENDEZ-VOUS SANTE.
                                Il se réfère à l&apos;utilisation du web et des nouvelles applications technologiques
                                qui s&apos;inscrive dans le cadre d&apos;une optimisation organisationnelle des consultations
                                médicales. Ce mode de prise de rendez-vous médicaux est un phénomène qui s&apos;amplifie
                                largement, tant au niveau national qu&apos;au niveau international.

                            </p>
                        </div>
                        <div className={styles.sled}>
                            <h2>Langages utilisés</h2>
                            <nav className={styles.nav}>
                                <ul>
                                    <a href="https://developer.wordpress.org/coding-standards/inline-documentation-standards/php/#:~:text=PHP%20documentation%20in%20WordPress%20mostly%20takes%20the%20form,Short%20Descriptions%29%20should%20be%20clear%2C%20simple%2C%20and%20brief." className={styles.a1}><li>PHP</li></a>
                                    <a href="https://sql.sh/" className={styles.a2}><li>SQL</li></a>
                                    <a href="https://developer.mozilla.org/en-US/docs/web/html" className={styles.a3}> <li>HTML</li></a>
                                    <a href="https://www.bing.com/search?q=css+documentation&cvid=99138f89bf6c460eb0c60067af4ce8b7&aqs=edge.0.0j69i57j0l7j69i11004.14375j0j4&FORM=ANAB01&PC=ASTS" className={styles.a4}><li>CSS</li></a>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className={styles.galerie}>
                        <Image src={image1} alt='page accueil'  ></Image>
                        <Image src={image2} alt='RDVmedecin'  ></Image>
                        <Image src={image3} alt='Page-inscription' ></Image>
                        <Image src={image4} alt='consulter-service' ></Image>
                        <Image src={image5} alt='Donnéés-admin' ></Image>
                        <Image src={image6} alt='Donnée-patient'  ></Image>

                    </div>
                </main>


            </div>
        </div>



    </>

};

export default Projet1;