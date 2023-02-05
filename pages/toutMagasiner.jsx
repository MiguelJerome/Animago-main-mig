import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Categorie from '../components/Categorie';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProduitListe from '../components/ProduitListe';
import styles from '../styles/ProduitListe.module.css';

export default function ToutMagasiner() {
    return <>
      <Header/>
      <Categorie />
        <main>
        <h1 className={styles.h1}>Nos produits:</h1>
        <ProduitListe />
          <h1>HTTP 302 | Found Tout Magasiner Page</h1>
          <h1>The web page is under construction</h1>
        </main>
      <Footer/>
    </>
  }