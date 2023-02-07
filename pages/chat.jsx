import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Categorie from '../components/Categorie';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProduitListe from '../components/ProduitListe';
import styles from '../styles/ProduitListe.module.css';

export default function Chat() {
    return <>
      <Header/>
      <Categorie />
        <main>
        <h1 className={styles.h1}>Chats</h1>
        <ProduitListe categorie="chat"/>
        </main>
      <Footer/>
    </>
  }