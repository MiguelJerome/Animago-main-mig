import styles from '/styles/ProduitCard.module.css';
import ProduitItemInfo from '/components/produit/ProduitItemInfo.jsx';
import ProduitItemImage from '/components/produit/ProduitItemImage.jsx';
import React from 'react';
import GetterSetterQuantite from '/components/ProduitBindingPanier/GetterSetterQuantite/GetterSetterQuantite';

export default function ProduitItem({ showPanierPanneau,
  toggler,
  product,
  averageWidth,
  averageHeight,
  router,
  addToCart,
  handleAddToCart }) {
  const { quantite, setQuantite, handleQuantityChange } = GetterSetterQuantite();

  const handleAddProductToCartWithQuantityReset = () => {
    handleAddToCart({ _id: product._id, stock: product.stock }, quantite);
    setQuantite(0);
  };

  return (
    <div key={product._id} className={`${styles.container} ${styles.containerItem}`}>
      <ProduitItemImage product={product} averageWidth={averageWidth} averageHeight={averageHeight} router={router} />
      <ProduitItemInfo
        product={product}
        addToCart={addToCart}
        handleAddToCart={handleAddToCart}
        handleQuantityChange={handleQuantityChange}
     
        quantite={quantite}
        handleAddProductToCartWithQuantityReset={handleAddProductToCartWithQuantityReset}
        toggler={toggler}
        showPanierPanneau={showPanierPanneau}
        item={product}
      />
    </div>
  );
}
