import { useState } from 'react';
import panier from '/models/panier.jsx';

  export const useCart = () => {
    const [cart, setCart] = useState(panier );
  
    const initCart = () => {
      setCart(panier );
    };
  
    const addToCart = (product, quantity) => {
      const index = cart.findIndex((p) => p._id === product._id);
  
      if (index === -1) {
        setCart([...cart, { ...product, purchaseQuantity: quantity }]);
      } else {
        const updatedCart = [...cart];
        updatedCart[index].purchaseQuantity += quantity;
        setCart(updatedCart);
      }
    };
  
    const removeFromCart = (item) => {
      const updatedCart = cart.filter((p) => p._id !== item._id);
      setCart(updatedCart);
    };
  
    return [cart, initCart, addToCart, removeFromCart, setCart];
  };