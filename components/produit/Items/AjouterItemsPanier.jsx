import React from 'react';
import { useCart } from '/components/AchatPanier/PanierLive.jsx';

export default function AjouterItemsPanier({ product, quantity }) {
  const [cart, addToCart] = useCart();

  const addItemToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div>
      <button onClick={addItemToCart}>Add to Cart</button>
    </div>
  );
}
