import React from 'react';
import Image from 'next/image';
import FermerPanier from '/public/img/FermerPanier.svg';
import styles from '/styles/Cart.module.css';

export default function PanierPanneauHeader({ router }) {
  return (
    <header className={styles.header}>
      <button className={`${styles.bouton} ${styles.close}`} onClick={() => router.back()}>
        <Image src={FermerPanier} alt="fermer panier" className={styles.panierFermer} />
      </button>
      <h2 className={styles.title}>Panier</h2>
    </header>
  );
}
