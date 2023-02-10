import React, { useState } from 'react';
import styles from '/styles/AjouterEnleverPanier.module.css'

export default function AjouterEnleverPanier({ depart, stock }) {
    const [quantite, setQuantite] = useState(depart || 0)

    const incrementer = () => {
        setQuantite(quantite < stock ? quantite + 1 : quantite);
    }

    const decrementer = () => {
        setQuantite(quantite > 0 ? quantite - 1 : quantite);
    }

    return (
        <div className={styles.achatWrapper}>
            <button className={styles.button} onClick={decrementer}>-</button>
            <div className={styles.panierItemQuantite}>{quantite}</div>
            <button className={styles.button} onClick={incrementer}>+</button>
        </div>
    );
}
