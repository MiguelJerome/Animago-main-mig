import React from 'react';
import styles from '/styles/AjouterEnleverPanier.module.css';
import { useCart } from '/components/AchatPanier/UseCart.jsx';
import ClearDepartProduit from '/components/ProduitBindingPanier/ClearDepartProduit/ClearDepartProduit';

export default function AjouterEnleverPanier({ product, stock, onQuantityChange, quantite }) {
  const [,cart, addToCart, setCart] = useCart([]);
  
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
   
  return (
    <div className={styles.achatWrapper}>
       <ClearDepartProduit  product={product} onQuantityChange={onQuantityChange} />
      <div><button className={styles.button} onClick={decrementer}>-</button></div>
      <div className={styles.panierItemQuantite}>{quantite}</div>
      <div><button className={styles.button} onClick={incrementer}>+</button></div>
    </div>
  );
}
