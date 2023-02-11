import React, { useState } from 'react';
import styles from '/styles/AjouterEnleverPanier.module.css'
import { useCart } from '/components/AchatPanier/PanierLive.jsx';

export default function AjouterEnleverPanier({ product, depart, stock }) {
    const [quantite, setQuantite] = useState(depart === 0 ? depart : 0)
    const [cart, addToCart] = useCart();

    const incrementer = () => {
        setQuantite(quantite < stock ? quantite + 1 : quantite);
        addToCart(product, 1);
    }

    const decrementer = () => {
        setQuantite(quantite > 0 ? quantite - 1 : quantite);
        addToCart(product, -1);
    }

    const clearDepart = () => {
        setQuantite(0);
        addToCart(product, -quantite);
    }

    return (
        <div className={styles.achatWrapper}>
            <button className={styles.button} onClick={decrementer}>-</button>
            <div className={styles.panierItemQuantite}>{quantite}</div>
            <button className={styles.button} onClick={incrementer}>+</button>
            <div className={styles.achatWrapper}>
                <button className={styles.button} onClick={clearDepart}>Clear</button>
            </div>
        </div>
    );
}
