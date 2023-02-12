import React from 'react';
import { useCart } from '/components/AchatPanier/UseCart.jsx';

export default function AjouterItemsPanier({ product, quantity }) {
  const [cart, addToCart] = useCart();

  const addItemToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div>
      
    </div>
  );
}
