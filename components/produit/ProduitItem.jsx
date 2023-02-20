import styles from '/styles/ProduitCard.module.css';
import ProduitInfo from '/components/produit/ProduitItemInfo.jsx';
import ProduitItemImage from '/components/produit/ProduitItemImage.jsx';
import React from 'react';

export default function ProduitItem({ product, averageWidth, averageHeight, router, addToCart, handleAddToCart, handleQuantityChange, clearDepart, quantite }) {
  return (
    <div key={product._id} className={`${styles.container} ${styles.containerItem}`}>
      <ProduitItemImage product={product} averageWidth={averageWidth} averageHeight={averageHeight} router={router} />
      <ProduitInfo
        product={product}
        addToCart={addToCart}
        handleAddToCart={handleAddToCart}
        handleQuantityChange={handleQuantityChange}
        clearDepart={clearDepart}
        quantite={quantite}
      />
    </div>
  );
}
