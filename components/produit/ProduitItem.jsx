import styles from '/styles/ProduitCard.module.css';
import ProduitItemInfo from '/components/produit/ProduitItemInfo.jsx';
import ProduitItemImage from '/components/produit/ProduitItemImage.jsx';
import React, { useState } from 'react';
export default function ProduitItem({ product, averageWidth, averageHeight, router, addToCart, handleAddToCart }) {
  const [quantite, setQuantite] = useState(0);

  const handleQuantityChange = (newQuantity) => {
    setQuantite(newQuantity);
  };

  const clearDepart = () => {
    setQuantite(0);
  };

  const handleAddToCartClick = () => {
    handleAddToCart({ _id: product._id, stock: product.stock }, quantite);
    clearDepart();
  };

  return (
    <div key={product._id} className={`${styles.container} ${styles.containerItem}`}>
      <ProduitItemImage product={product} averageWidth={averageWidth} averageHeight={averageHeight} router={router} />
      <ProduitItemInfo
        product={product}
        addToCart={addToCart}
        handleAddToCart={handleAddToCart}
        handleQuantityChange={handleQuantityChange}
        clearDepart={clearDepart}
        quantite={quantite}
        handleAddToCartClick={handleAddToCartClick}
      />
    </div>
  );
}
