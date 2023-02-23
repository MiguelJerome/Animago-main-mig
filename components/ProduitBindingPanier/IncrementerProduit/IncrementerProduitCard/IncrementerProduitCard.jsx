import React from 'react';
import styles from '/styles/AjouterEnleverPanier.module.css';
import { useCart } from '/components/AchatPanier/UseCart.jsx';

const IncrementerProduitCard = ({ product, stock, onQuantityChange, quantite, addToCart }) => {

  const incrementer = () => {
    if (quantite < stock) {
      const newQuantity = quantite + 1;
      addToCart(product, 1);
      onQuantityChange(newQuantity); 
    }
  };
  
    return (
      <>
        <div><button className={styles.button} onClick={incrementer}>+</button></div>
    </>
  );
};

export default IncrementerProduitCard;
