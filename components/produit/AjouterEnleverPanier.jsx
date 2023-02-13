import React, { useState } from 'react';
import styles from '/styles/AjouterEnleverPanier.module.css';
import { useCart } from '/components/AchatPanier/UseCart.jsx';
import ProduitCard from './ProduitCard';
import useClearDepart from '/components/produit/Items/EffacerBoutonPanier.jsx';

export default function AjouterEnleverPanier({ product, depart, stock, onClearDepart }) {
    const [quantite, setQuantite] = useState(depart === 0 ? depart : 0);
    const [cart, addToCart] = useCart();

    const incrementer = () => {
        setQuantite(quantite < stock ? quantite + 1 : quantite);
        addToCart(product, 1);
    };

    const decrementer = () => {
        setQuantite(quantite > 0 ? quantite - 1 : quantite);
        addToCart(product, -1);
    };

    const clearDepart = () => {
        setQuantite(0);
        addToCart(product, -quantite);
    };

    return (
        <div className={styles.achatWrapper}>
            <button className={styles.buttonClear} onClick={clearDepart}>Clear</button>
            <div><button className={styles.button} onClick={decrementer}>-</button></div>
            <div className={styles.panierItemQuantite}>{quantite}</div>
            <div><button className={styles.button} onClick={incrementer}>+</button></div>
        </div>
    );
}