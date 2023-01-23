
import styles from '../styles/Header.module.css'
import Image from 'next/image'

import facebook from '../public/img/facebook.png'
import search from '../public/img/search.png'

export default function Header(){
    return <header>
            <div className={`${styles.headerLivraison}`}>
                <p className={`${styles.p}`}>
                LIVRAISON GRATUITE - COMMANDEZ AUJOURD'HUI
                </p>
            </div>
            <p className={`${styles.nomAnimago}`}>ANIMAGO!</p>
            <div className={`${styles.header2}`}>
                <div className={`${styles.catchPhrase}`}>
                    <Image src={facebook} alt='lien pour facebook' className={`${styles.iconReseaux}`} />
                    <Image src={facebook} alt='lien pour facebook' className={`${styles.iconReseaux}`} />
                    <Image src={facebook} alt='lien pour facebook' className={`${styles.iconReseaux}`} />
                    <p className={`${styles.p}`}>
                        L'endroit préféré d'article animalier
                    </p>
                </div>  
                <form className={`${styles.searchForm}`}> 
                    <input type="search" id="query" name="q" placeholder="Search..." className={`${styles.searchBar}`}/>
                    <button className={`${styles.searchButton}`}><Image src={search} className={`${styles.searchLogo}`}/></button>
                </form>
            </div>
    </header>
}