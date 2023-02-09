import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Accueil.module.css'
import Gallerie from '../components/ImageAccueil';
import ImagePrincipal from '../public/img/image_accueil.png'
import Image from 'next/image'

export default function Accueil() {
    return <>
      <Header/>
        <main>
          <Image src={ImagePrincipal} alt='Image principale pour vente de produit animalier' className={styles.imgPrincipale}/>
          <Gallerie className={styles.imgGrid}/>
        </main>
      <Footer/>
    </>
  }