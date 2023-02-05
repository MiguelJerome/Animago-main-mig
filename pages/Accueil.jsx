import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Categorie from '../components/Categorie';
import ProduitItem from '../components/ProduitItem';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Accueil() {
    return <>
      <Header/>
      <Categorie />
        <main>
        <ProduitItem />
          <h1>HTTP 302 | Found Accueil Page</h1>
          <h1>The web page is under construction</h1>
        </main>
      <Footer/>
    </>
  }