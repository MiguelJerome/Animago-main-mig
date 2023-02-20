import React from 'react';
import styles from '/styles/AjouterEnleverPanier.module.css';
import { useCart } from '/components/AchatPanier/UseCart.jsx';

export default function AjouterEnleverPanier({ product, depart, stock, onQuantityChange, quantite }) {
  const [cart, addToCart] = useCart();

  const incrementer = () => {
    if (quantite < stock) {
      const newQuantity = quantite + 1;
      addToCart(product, 1);
     onQuantityChange(newQuantity); 
    }
  };
  
  const decrementer = () => {
    const newQuantity = quantite > 0 ? quantite - 1 : quantite;
    addToCart(product, -1);
    onQuantityChange(newQuantity); 
  };
  
  const clearDepart = (newDepart) => {
    addToCart(product, -quantite);
    onQuantityChange(0);
    onQuantityChange(newDepart); 
  };
  
  return (
    <div className={styles.achatWrapper}>
      <button className={styles.buttonClear} onClick={() => clearDepart(0)}>Clear</button>
      <div><button className={styles.button} onClick={decrementer}>-</button></div>
      <div className={styles.panierItemQuantite}>{quantite}</div>
      <div><button className={styles.button} onClick={incrementer}>+</button></div>
    </div>
  );
}
