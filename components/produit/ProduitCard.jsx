import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '/styles/ProduitCard.module.css';
import React, { useState, useEffect } from 'react';
import AjouterEnleverPanier from './AjouterEnleverPanier';
import { useCart } from '/components/AchatPanier/UseCart';

export default function ProduitCard({ produits }) {
  const [produitsState, setProduits] = useState(produits);
  const [quantite, setQuantite] = useState(0);
  const [averageWidth, setAverageWidth] = useState(0);
  const [averageHeight, setAverageHeight] = useState(0);

  useEffect(() => {
    setAverageWidth(Math.max(...produits.map((p) => p.width), 0));
    setAverageHeight(Math.max(...produits.map((p) => p.height), 0));
  }, [produits]);

  const router = useRouter();
  const [, addToCart] = useCart();

  const clearDepart = () => {
    setQuantite(0);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantite(newQuantity);
  };

  const handleAddToCart = ({ _id, stock }, quantity) => {
    const productIndex = produitsState.findIndex((p) => p._id === _id);
    const updatedProduct = { ...produitsState[productIndex], stock: stock - quantity };
    const updatedProduits = [
      ...produitsState.slice(0, productIndex),
      updatedProduct,
      ...produitsState.slice(productIndex + 1),
    ];
    setProduits(updatedProduits);
  };

  return (
    <div className={styles.gallerie}>
      {produitsState.map(({ _id, src, alt, name, price, stock }) => (
        <div key={_id} className={`${styles.container} ${styles.containerItem}`}>
          <div className={styles.container}>
            <Image
              className={styles.imgCard}
              src={src}
              alt={alt || 'Default Image'}
              width={Number(averageWidth) || 400}
              height={Number(averageHeight) || 400}
              onClick={() => router.push(`/produit/${name}`)}
            />
          </div>
          <div className={styles.imageInfo}>
            <p className={styles.imageId}>Produit</p>
            <p className={styles.imageId}>#{_id}</p>
            <p className={styles.imageName}>{name}</p>
            <p className={styles.imagePrice}>C${price}</p>
            <p className={styles.imageStock}>
              <span className={styles.stock}>{stock}</span> items en stock
            </p>
            <div className={styles.dashBoardButton}>
            <AjouterEnleverPanier
              stock={stock}
              depart={quantite}
              product={{ _id, name, price }}
              onQuantityChange={handleQuantityChange}
              onAddToCart={() => {
                addToCart({ _id, name, price }, quantite);
                handleAddToCart({ _id, stock }, quantite);
              }}
              onClearDepart={clearDepart}
            />
              <button
                className={styles.button}
                onClick={() => handleAddToCart({ _id, stock }, quantite)}
              >
                Ajouter au Panier
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
