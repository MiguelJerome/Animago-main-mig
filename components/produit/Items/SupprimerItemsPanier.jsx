import React from 'react';
import styles from '/styles/AjouterEnleverPanier.module.css';
import { useCart } from '/components/AchatPanier/PanierLive.jsx';

export default function ClearCartButton({ product, quantity }) {
  const [cart, addToCart] = useCart();

  const clearCart = () => {
    addToCart(product, -quantity);
  };

  return (
    <div>
      <button className={styles.buttonClear} onClick={clearCart}>Clear Cart</button>
    </div>
  );
}