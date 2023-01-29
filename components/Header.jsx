import Menu from './Menu';
import styles from '../styles/Header.module.css'
import Image from 'next/image'

import facebook from '../public/img/facebook.png'
import instagram from '../public/img/instagram.png'
import youtube from '../public/img/youtube.png'
import search from '../public/img/search.png'

export default function Header(){
    return         <header>
    <div className={styles.headerLivraison}>
        <p className={styles.p}>
            LIVRAISON GRATUITE - COMMANDEZ AUJOURD'HUI
        </p>
    </div>
    <p className={styles.nomAnimago}>ANIMAGO!</p>
    <div className={styles.header2}>
        <div className={styles.catchPhrase}>
            <a href="https://facebook.com">
                <Image src={facebook} alt='lien pour facebook' className={styles.iconReseaux} />
            </a>
            <a href="https://instagram.com">
                <Image src={instagram} alt='lien pour instagram' className={styles.iconReseaux} />
            </a>
            <a href="https://youtube.com">
                <Image src={youtube} alt='lien pour twitter' className={styles.iconReseaux} />
            </a>
            <p className={styles.p}>
                L'endroit préféré d'article animalier
            </p>
        </div>  
        <form className={styles.searchForm}> 
            <input type="search" id="query" name="q" placeholder="Search..." className={styles.searchBar}/>
            <button className={styles.searchButton}>
                <Image src={search} className={styles.searchLogo}/>
            </button>
        </form>
    </div>
    <Menu />
</header>
}