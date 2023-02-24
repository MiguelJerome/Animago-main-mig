import React from 'react';
import styles from '/styles/AjouterEnleverPanier.module.css';
import { useCart } from '/components/AchatPanier/UseCart.jsx';
import ClearDepartProduit from '/components/ProduitBindingPanier/ClearDepartProduit/ClearDepartProduit';
import InputPanier from '/components/AchatPanier/PanierPanneauDroit/InputPanier';
import IncrementerProduitCard from '/components/ProduitBindingPanier/IncrementerProduit/IncrementerProduitCard/IncrementerProduitCard';

export default function AjouterEnleverPanier({ product, stock, onQuantityChange, quantite }) {
  const [, cart, addToCart, setCart] = useCart([]);
  
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

  const item = Array.isArray(cart) ? cart.find((item) => item._id === product._id) : null;

  return (
    <div className={styles.achatWrapper}>
      <ClearDepartProduit product={product} onQuantityChange={onQuantityChange} />
      <div><button className={styles.button} onClick={decrementer}>-</button></div>
      <div className={styles.panierItemQuantite}>{quantite}</div>
      <div><button className={styles.button} onClick={incrementer}>+</button></div>
      {/* <IncrementerProduitCard product={product} stock={stock} onQuantityChange={onQuantityChange} quantite={item ? item.purchaseQuantity : 0} addToCart={addToCart} />*/}
    </div>
  );
}
