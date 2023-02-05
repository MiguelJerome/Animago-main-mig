import { Inter } from '@next/font/google'
import styles from '../styles/Contact.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return <>
  <Header/>
    <main>
      <div className={styles.bodyContact}>
        <h1 className={styles.titreContact}>Rendez nous visite</h1>
        <div className={styles.magasinContact}>
          <div className={styles.adresseContact}>
            <h2>Magasin Phare</h2>
            <a>Tel: 1(800) 742-2483 </a>
            <a>801 Aviation Pkwy,</a>
            <a>Ottawa, ON K1K 4R3</a>
            <div className={styles.adresseContact}>
            <a className={styles.horaire}>Horaires d'ouvertures</a>
            <a>Lun - Ven : 7h00 - 22h00 </a>
            <a>Samedi : 8h - 22h</a>
            <a>Dimanche : 8h - 23h</a>
            </div>
          </div>
          <div className={styles.adresseContact}>
            <h2>Animago! Ottawa</h2>
            <a>Tel: 1-613-520-2600</a>
            <a>1125 Colonel By Drive</a>
            <a>Ottawa, ON K1S 5B6</a>
            <div className={styles.adresseContact}>
            <a className={styles.horaire}>Horaires d'ouvertures</a>
            <a>Lun - Ven : 7h00 - 22h00 </a>
            <a>Samedi : 8h - 22h</a>
            <a>Dimanche : 8h - 23h</a>
            </div>
          </div>
          <div className={styles.adresseContact}>
            <h2>Animago! Toronto</h2>
            <a>Tel: 1(800) 267-2483</a>
            <a>9 Lower Javis st.</a>
            <a>Toronto, ON M5E 0C3</a>
            <div className={styles.adresseContact}>
            <a className={styles.horaire}>Horaires d'ouvertures</a>
            <a>Lun - Ven : 7h00 - 22h00 </a>
            <a>Samedi : 8h - 22h</a>
            <a>Dimanche : 8h - 23h</a>
            </div>
          </div>
        </div>
        <h1 className={styles.courriel}>Pour nous joindre : info@animago.com</h1>
      </div>
    </main>
    <Footer/>
  </>
}