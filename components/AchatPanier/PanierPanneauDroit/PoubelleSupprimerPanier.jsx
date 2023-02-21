import React from 'react';
import styles from '/styles/Cart.module.css';

const PoubelleSupprimerPanier = ({ item, removeFromCart }) => {
  return (
    <span
      role="img"
      aria-label="trash"
      onClick={() => removeFromCart(item)}
      className={styles.imgCard}
    >
      🗑️
    </span>
  );
};

export default PoubelleSupprimerPanier;
