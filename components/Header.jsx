import { useRouter } from 'next/router'
import Menu from './Menu';
import styles from '../styles/Header.module.css'
import Image from 'next/image'

import facebook from '../public/img/facebook.svg'
import instagram from '../public/img/instagram.svg'
import youtube from '../public/img/youtube.svg'
import search from '../public/img/search.png'
import Login from '../public/img/login.png'
import Cart from '../public/img/cart.png'

export default function Header(){
    const router = useRouter()
    return <header>
        <div className={styles.headerLivraison}>
            <p className={styles.p}>
                LIVRAISON GRATUITE - COMMANDEZ AUJOURD'HUI
            </p>
        </div>
        <div className={`${styles.divRow}`}>
            <p className={styles.nomAnimago} onClick={() => router.push('/Accueil')}>ANIMAGO!</p>
            <div className={`${styles.top}`}>
                <form className={styles.searchForm}> 
                    <input type="search" id="query" name="q" placeholder="Search..." className={styles.searchBar}/>
                    <button className={styles.searchButton}>
                        <Image src={search} className={styles.searchLogo}/>
                    </button>
                </form>
                <div className={`${styles.appelezNous}`}>
                    <p className={styles.p}>
                        Appelez-nous
                    </p>
                    <p className={styles.p}>
                        1(800) ANI-MAGO
                    </p>
                </div>
            </div>
        </div>  
        <div className={styles.header2}>
            <div className={styles.catchPhrase}>
                <a onClick={() => router.push("https://facebook.com")}>
                    <Image src={facebook} alt='lien pour facebook' className={styles.iconReseaux}  />
                </a>
                <a onClick={() => router.push("https://instagram.com")}>
                    <Image src={instagram} alt='lien pour instagram' className={styles.iconReseaux} />
                </a>
                <a onClick={() => router.push("https://youtube.com")}>
                    <Image src={youtube} alt='lien pour twitter' className={styles.iconReseaux} />
                </a>
                <p className={styles.p}>
                    L'endroit préféré d'article animalier
                </p>
            </div>
            
            <div className={styles.menuLogo}>
                <div className={styles.menuProductList}>
                    <Image src={Login} alt='lien pour se connecter' className={styles.loginCart} />
                    <a className={styles.aLogin} onClick={() => router.push("/Connexion")}>Connexion</a>
                    <a className={styles.aLogin}onClick={() => router.push("/Inscription")}>Inscription</a>
                </div>
                <div className={styles.menuProductList}>
                    <Image src={Cart} alt='lien pour se connecter' className={styles.loginCart} />
                </div>
            </div>
        </div>
        <Menu />
    </header>
}