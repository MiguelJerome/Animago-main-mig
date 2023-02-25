import { useState } from 'react';
import panier from '/models/panier.jsx';

export const useCart = () => {
  const [cart, setCart] = useState(panier);

  const initCart = () => {
    setCart(panier);
  };

  const addToCart = (product, quantity) => {
    const updatedCart = cart.map((p) => {
      if (p._id === product._id) {
        return { ...p, purchaseQuantity: p.purchaseQuantity + quantity };
      }
      return p;
    });

    const existingItem = updatedCart.find((p) => p._id === product._id);

    if (!existingItem) {
      updatedCart.push({ ...product, purchaseQuantity: quantity });
    }

    setCart(updatedCart);
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((p) => p._id !== item._id);
    setCart(updatedCart);
  };

  const getPurchaseQuantity = (itemId) => {
    const item = cart.find((p) => p._id === itemId);
    if (item) {
      return item.purchaseQuantity;
    }
    return 0;
  };

  return [cart, initCart, addToCart, removeFromCart, setCart, getPurchaseQuantity];
};

