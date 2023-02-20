import React, { useState } from 'react';
import styles from '/styles/AjouterEnleverPanier.module.css';
import { useCart } from '/components/AchatPanier/UseCart.jsx';

export default function AjouterEnleverPanier({ product, depart, stock, onQuantityChange }) {
  const [quantite, setQuantite] = useState(depart === 0 ? depart : 0);
  const [cart, addToCart] = useCart();

  const incrementer = () => {
    if (quantite < stock) {
      const newQuantity = quantite + 1;
      setQuantite(newQuantity);
      addToCart(product, 1);
      onQuantityChange(newQuantity); 
    }
  };
  
  const decrementer = () => {
    const newQuantity = quantite > 0 ? quantite - 1 : quantite;
    setQuantite(newQuantity);
    addToCart(product, -1);
    onQuantityChange(newQuantity); 
  };
  
  const clearDepart = (newDepart) => {
    setQuantite(0);
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
