import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Menu from './Menu/Menu';
import styles from '../styles/Header.module.css'
import Image from 'next/image'

import facebook from '../public/img/facebook.svg'
import instagram from '../public/img/instagram.svg'
import youtube from '../public/img/youtube.svg'
import search from '../public/img/search.png'
import Login from '../public/img/login.png'
import Cart from '../public/img/cart.png'

export default function Header() {
    const [query, setQuery] = useState("");
    const router = useRouter();
    
    const handleChange = (event) => {
    setQuery(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        router.push(`/produit/${query}`);
        console.log(`Searching for: ${query}`);
      };

    return (
    <>
        <header>
        <div className={styles.headerLivraison}>
            <p className={styles.p}>
                LIVRAISON GRATUITE - COMMANDEZ AUJOURD'HUI
            </p>
        </div>
        <div className={`${styles.divRow}`}>
            <p className={styles.nomAnimago} onClick={() => router.push('/Accueil')}>ANIMAGO!</p>
            <div className={`${styles.top}`}>
                <form className={styles.searchForm} onSubmit={handleSubmit}>
                    <input
                        type="search"
                        id="query"
                        name="q"
                        placeholder="Chercher un produit..."
                        className={styles.searchBar}
                        value={query}
                        onChange={handleChange}
                    />
                    <button className={styles.searchButton} type="submit">
                        <Image src={search} className={styles.searchLogo} />
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
                    <Image src={facebook} alt='lien pour facebook' className={styles.iconReseaux} />
                </a>
                <a onClick={() => router.push("https://instagram.com")}>
                    <Image src={instagram} alt='lien pour instagram' className={styles.iconReseaux} />
                </a>
                <a onClick={() => router.push("https://youtube.com")}>
                    <Image src={youtube} alt='lien pour twitter' className={styles.iconReseaux} />
                </a>
                <p className={styles.p}>
                    Vos article préféré pour vos animaux préféré
                </p>
            </div>
            
            <div className={styles.menuLogo}>
                <div className={styles.menuProductList}>
                    <a className={styles.aLogin} onClick={() => router.push("/InscriptionConnexion/Inscription")}>
                        <Image src={Login} alt='lien pour se connecter' className={styles.loginCart} />
                    </a>
                    <a className={styles.aLogin} onClick={() => router.push("/InscriptionConnexion/Connexion")}>Connexion</a>
                    <a className={styles.aLogin} onClick={() => router.push("/InscriptionConnexion/Inscription")}>Inscription</a>
                </div>
                <div className={styles.menuProductList}>
                    <a onClick={() => router.push("/AchatsPanier/PanierPanneau")}>
                        <Image src={Cart} alt='lien pour se connecter' className={styles.loginCart} />
                    </a>
                </div>
            </div>
        </div>
        <Menu />
            </header>
            </>       
    );
}