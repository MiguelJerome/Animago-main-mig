import { useRouter } from 'next/router';
import styles from '/styles/ProduitCard.module.css';
import React, { useState } from 'react';
import { useCart } from '/components/AchatPanier/UseCart';
import DimensionsMoyennesImages from '/components/Images/DimensionsMoyennesImages.jsx';
import ProduitItem from "/components/produit/ProduitItem.jsx";

export default function ProduitCard({ produits }) {
  const [produitsState, setProduits] = useState(produits);
  const [quantite, setQuantite] = useState(0);
  const router = useRouter();
  const [, addToCart] = useCart();

  const clearDepart = () => {
    setQuantite(0);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantite(newQuantity);
  };

  const handleAddToCart = ({ _id, stock }, quantity) => {
    if (quantity > stock) {
      return;
    }
    const productIndex = produitsState.findIndex((p) => p._id === _id);
    const updatedProduct = { ...produitsState[productIndex], stock: stock - quantity };
    const updatedProduits = [
      ...produitsState.slice(0, productIndex),
      updatedProduct,
      ...produitsState.slice(productIndex + 1),
    ];
    setProduits(updatedProduits);
    setQuantite(0); 
  };

  const handleAddToCartClick = (newDepart) => {
    handleAddToCart({ _id, stock }, quantite);
    clearDepart(newDepart);
  };
  

  return (
    <div className={styles.gallerie}>
      <DimensionsMoyennesImages produits={produitsState}>
        {({ averageWidth, averageHeight }) => (
          <>
            {produitsState.map((product) => (
              <ProduitItem
                key={product._id}
                product={product}
                averageWidth={averageWidth}
                averageHeight={averageHeight}
                router={router}
                addToCart={addToCart}
                handleAddToCart={handleAddToCart}
                handleQuantityChange={handleQuantityChange}
                clearDepart={clearDepart}
                quantite={quantite}
                handleAddToCartClick={handleAddToCartClick} // pass the new handler function
              />
            ))}
          </>
        )}
      </DimensionsMoyennesImages>
    </div>
  );
}
