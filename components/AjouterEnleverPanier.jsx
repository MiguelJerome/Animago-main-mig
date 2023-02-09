import { useState } from 'react';

import styles from '../styles/AjouterEnleverPanier.module.css'

export default function Compteur({depart}) {
    const [nombre, setNombre] = useState(depart || 0)

    const incrementer = () => {
        setNombre(nombre + 1)
    }

    const decrementer = () => {

        nombre !=0 && setNombre(nombre - 1)
    }

    return (
        <>
            <div className={styles.achatWrapper}>
            
                <button className={styles.button} onClick={decrementer}>
                    -
                </button>
                <div className={styles.panierItemNombre}>
                    {nombre}
                </div>
                <button className={styles.button} onClick={incrementer}>
                    +
                </button>
            </div>
        </>
    );
}