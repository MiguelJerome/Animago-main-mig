import React, { useState } from 'react';
import styles from '../styles/AjouterEnleverPanier.module.css'

export default function AjouterEnleverPanier({ depart, stock }) {
    const [nombre, setNombre] = useState(depart || 0)

    const incrementer = () => {
        setNombre(nombre < stock ? nombre + 1 : nombre);
    }

    const decrementer = () => {
        setNombre(nombre > 0 ? nombre - 1 : nombre);
    }

    return (
        <div className={styles.achatWrapper}>
            <button className={styles.button} onClick={decrementer}>-</button>
            <div className={styles.panierItemNombre}>{nombre}</div>
            <button className={styles.button} onClick={incrementer}>+</button>
        </div>
    );
}
