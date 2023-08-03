
import styles from '../styles/Accueil.module.css'
import Image from 'next/image';
import logo from '../public/logo2.png'
import photo from '../public/mbaye.jpg.JPG'
import Head from 'next/head';


const Accueil = () => {
  return <>
    <Head>
      <title>Portfolio | Accueil</title>
      <meta name="description" content="Page d&apos;accueil de mon porfolio présentant une description de mes experiences" />
      <meta property="og: title" content="Portfolio | Accueil" />
      <meta property="og: description" content="Page d'accueil de mon porfolio présentant une description de mes experiences" />
      <meta property="og: image" content="http:localhost:3000/public/téléc.png" />
    </Head>
    <div className={styles.pagewrapper}>

      <div className={styles.contentwrapper}>

        <main className={styles.main}>
          <Image src={photo} alt='image-auteur' className={styles.photo} priority></Image>
          <div className={styles.advert}>
            <div className={styles.winter}>
              <h2>Un développeur web passionné !</h2>
              <p>
                Ma passion pour le développement web commence en 2018 et m&apos;a demandé un changement radical de cursus afin de pouvoir pleinement l&apos;exploiter.

                Dès lors, j&apos;ai mis tout en oeuvre pour percer dans cette voie, tout en prenant du plaisir sur les divers projets développés.

                En Septembre 2022, j&apos;ai décidé de m&apos;inscrire dans un programme informatique de la cité collégiale pour percer dans ce domaine.
                J&apos;aimerai atteindre un défi qui est de devenir un développeur web « full-stack ». Le milieu du travail me permettrait de confronter mes  idées avec d&apos;autres développeurs web afin d&apos;acquérrir plus d&apos;experiences
              </p>
            </div>
            <div className={styles.sled}>
              <h2>Expérience en développement </h2>
              Mon expérience acquise au fil des projets me permet de mieux comprendre les attentes d&apos;un client et de répondre précisement au besoin demandé en fonction du domaine d&apos;activité.

              Du site vitrine au projet plus complexe, je vous propose une expertise et un développement web qui correspond à vos attentes et à vos besoins.

              Un tarif adapté à votre projet
              Travaillant régulièrement avec des PME, associations ou particuliers, je vous propose des solutions à votre portée et adaptée à votre budget.

            </div>
          </div>

          <div >
            <Image src={logo} alt='developpeur-web' className={styles.logo} ></Image>

          </div>

        </main>


      </div>
    </div>



  </>

};

export default Accueil;