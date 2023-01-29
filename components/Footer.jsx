import { useRouter } from 'next/router'
import Image from 'next/image';
import facebook from '../public/img/facebook.svg'
import instagram from '../public/img/instagram.svg'
import youtube from '../public/img/youtube.svg'
import styles from '../styles/Footer.module.css';

export default function Footer() {
const router = useRouter()

return <footer className={styles.footer}>

    <div className={styles.footer__socials}>
            <section>
                <div className={styles.container} >
                    <div className={`${styles.catchPhrase} ${styles.containerP}`}> 
                        <h3 className={styles.h3}>Notre magasin phare</h3>
                        <span>801 Aviation Pkwy</span>
                        <span>Ottawa, ON K1K 4R3</span>
                        <span>Tel: 1(800) ANI-MAGO</span>
                    </div>
                    <div className={`${styles.catchPhrase} ${styles.containerP}`}> 
                        <h3 className={styles.h3}>Boutique</h3>
                        <button className={styles.menuProductList} onClick={() => router.push('/chien')}>Chiens</button>
                        <button className={styles.menuProductList} onClick={() => router.push('/chat')}>Chats</button>
                        <button className={styles.menuProductList} onClick={() => router.push('/oiseau')}>Oiseaux</button>
                        <button className={styles.menuProductList} onClick={() => router.push('/aquatique')}>Poissons et Aquatiques</button>
                        <button className={styles.menuProductList} onClick={() => router.push('/petitanimaux')}>Petit Animaux</button>
                        <button className={styles.menuProductList} onClick={() => router.push('/reptile')}>Reptiles</button>
                    </div>
                    <div className={`${styles.catchPhrase} ${styles.containerP}`}> 
                        <h3 className={styles.h3}>Info</h3>
                        <button className={styles.menuProductList} onClick={() => router.push('/histoire')}>Notre histoire</button>
                        <button className={styles.menuProductList} onClick={() => router.push('/contact')}>Contact</button>
                        <button className={styles.menuProductList} onClick={() => router.push('/expeditionRetours')}>Expedition & retours</button>
                        <button className={styles.menuProductList} onClick={() => router.push('/politique')}>Politique du magasin</button>
                    </div>
                </div>
                <h3 className={`${styles.catchPhrase} ${styles.containerP}`}>RESTER CONNECTÉ</h3>
                <div className={styles.catchPhrase}>
                <a onClick={() => router.push("https://facebook.com")}>
                <Image src={facebook} alt='lien pour facebook' className={styles.img} />
                </a>
                <a onClick={() => router.push("https://instagram.com")}>
                <Image src={instagram} alt='lien pour instagram' className={styles.img} />
                </a>
                <a onClick={() => router.push("https://youtube.com")}>
                <Image src={youtube} alt='lien pour youtube' className={styles.img} />
                </a>
                </div>
            </section>
        </div>
    </footer>
}