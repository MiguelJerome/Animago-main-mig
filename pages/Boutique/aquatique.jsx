import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProduitListe from '../../components/produit/ProduitListe';
import styles from '/styles/ProduitListe.module.css';

export default function Aquatique() {
    return <>
      <Header/>
        <main>
        <h1 className={styles.h1}>Aquatique</h1>
        <ProduitListe categorie="aquatique"/>
        </main>
      <Footer/>
    </>
  }