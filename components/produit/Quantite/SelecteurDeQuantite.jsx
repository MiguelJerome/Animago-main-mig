import React, { useState } from 'react';
import styles from '/styles/AjouterEnleverPanier.module.css';
import { useCart } from '/components/AchatPanier/UseCart.jsx';

export default function SelecteurDeQuantite({ quantity, maxQuantity, onQuantityChange, depart, stock, product }) {
  const [quantite, setQuantite] = useState(depart === 0 ? depart : 0);
  const [cart, addToCart] = useCart();

  const increment = () => {
    if (quantity < maxQuantity) {
      onQuantityChange(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className={styles.achatWrapper}>
      <div><button className={styles.button} onClick={decrement}>-</button></div>
      <div className={styles.panierItemQuantite}>{quantity}</div>
      <div><button className={styles.button} onClick={increment}>+</button></div>
    </div>
  );
}