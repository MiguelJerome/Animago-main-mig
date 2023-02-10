import React, { useState } from 'react';
import produits from '/models/produits';

function PanierUpdate() {
  const [cart, setCart] = useState(produits);

  const initCart = () => {
    setCart(produits);
  };

  return { cart, initCart };
}

export default PanierUpdate;