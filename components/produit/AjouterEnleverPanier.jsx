import React, { useState } from 'react';
import styles from '/styles/AjouterEnleverPanier.module.css';
import { useCart } from '/components/AchatPanier/UseCart.jsx';

export default function AjouterEnleverPanier({ product, depart, stock, onQuantityChange }) {
  const [quantite, setQuantite] = useState(depart === 0 ? depart : 0);
  const [cart, addToCart] = useCart();

  const incrementer = () => {
    if (quantite < stock) {
      setQuantite(quantite + 1);
      addToCart(product, 1);
      onQuantityChange(quantite + 1); 
    }
  };

  const decrementer = () => {
    setQuantite(quantite > 0 ? quantite - 1 : quantite);
    addToCart(product, -1);
    onQuantityChange(quantite - 1); 
  };

  const clearDepart = () => {
    setQuantite(0);
    addToCart(product, -quantite);
    onQuantityChange(0); 
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
