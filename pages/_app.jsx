import 'normalize.css/normalize.css'
import '../styles/globals.css'
import { Provider } from 'react-redux'; // Ajout de l'import pour Provider
import store from '../store'; // Ajout de l'import pour le store
import { Roboto_Flex, Montserrat } from '@next/font/google'
import Layout from '../components/Layout';

const roboto = Roboto_Flex({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}> {/* Envelopper avec le composant Provider */}
      <style jsx global>
        {`
         html {
          font-family : ${roboto.style.fontFamily}
         }
         h1,h2,h3,h4,h5,h6 {
          font-family =${montserrat.style.fontFamily}
         }
       `}
      </style>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
