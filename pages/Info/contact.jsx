import { Inter } from '@next/font/google'
import styles from '/styles/Contact.module.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return <>
    <Header />
    <main>
    <h1 className={styles.titreContact}>Rendez nous visite</h1>
        <div className={styles.bodyContact}>
          
          <div className={styles.magasinContact}>
            <div className={styles.adresseContact}>
              <h2>Magasin Phare</h2>
              <ul>
                <li>Tel: 1(800) 742-2483 </li>
                <li>801 Aviation Pkwy,</li>
                <li>Ottawa, ON K1K 4R3</li>
              </ul>
              <div className={styles.adresseContact}>
                <p className={styles.horaire}>Horaires d'ouvertures</p>
                <ul>
                  <li>Lun - Ven : 7h00 - 22h00 </li>
                  <li>Samedi : 8h - 22h</li>
                  <li>Dimanche : 8h - 23h</li>
                </ul>
              </div>
            </div>
            <div className={styles.adresseContact}>
              <h2>Animago! Ottawa</h2>
              <ul>
                <li>Tel: 1-613-520-2600</li>
                <li>1125 Colonel By Drive</li>
                <li>Ottawa, ON K1S 5B6</li>
              </ul>
              <div className={styles.adresseContact}>
                <p className={styles.horaire}>Horaires d'ouvertures</p>
                <ul>
                  <li>Lun - Ven : 7h00 - 22h00 </li>
                  <li>Samedi : 8h - 22h</li>
                  <li>Dimanche : 8h - 23h</li>
                </ul>
              </div>
            </div>
            <div className={styles.adresseContact}>
              <h2>Animago! Toronto</h2>
              <ul>
                <li>Tel: 1(800) 267-2483</li>
                <li>9 Lower Javis st.</li>
                <li>Toronto, ON M5E 0C3</li>
              </ul>
              <div className={styles.adresseContact}>
                <p className={styles.horaire}>Horaires d'ouvertures</p>
                <ul>
                  <li>Lun - Ven : 7h00 - 22h00 </li>
                  <li>Samedi : 8h - 22h</li>
                  <li>Dimanche : 8h - 23h</li>
                </ul>
              </div>
            </div>
          </div>
          
      </div>
      <h1 className={styles.courriel}>Pour nous joindre : info@animago.com</h1>
      </main>
    <Footer/>
  </>
}