import React, { useState } from 'react';
import styles from '/styles/AjouterEnleverPanier.module.css';
import { useCart } from '/components/AchatPanier/UseCart.jsx';

export default function EffacerBoutonPanier({ product, depart, stock, onClearDepart }) {
    const [quantite, setQuantite] = useState(depart === 0 ? depart : 0)
  const [cart, addToCart] = useCart();

  const clearCart = () => {
    const quantityToRemove = cart.reduce((total, item) => {
      if (item?._id === product?._id) {
        return total + item.purchaseQuantity;
      } else {
        return total;
      }
    }, 0);
    addToCart(product, -quantityToRemove);
    };


    const clearDepart = () => {
        setQuantite(0);
        addToCart(product, -quantite);
    }

  return (
      <div>
          <button className={styles.buttonClear} onClick={clearDepart}>Clear</button>
      <button className={styles.buttonClear} onClick={clearCart}>Clear Cart</button>
    </div>
  );
}
