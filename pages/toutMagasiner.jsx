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
          <h1 className={styles.h1}>Tout magasiner</h1>
        <ProduitListe categorie={""} />
        </main>
      <Footer/>
    </>
  }