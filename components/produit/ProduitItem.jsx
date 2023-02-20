import Image from 'next/image';
import styles from '/styles/ProduitCard.module.css';
import AjouterEnleverPanier from './AjouterEnleverPanier';
import React from 'react';

export default function ProduitItem({ product, averageWidth, averageHeight, router, addToCart, handleAddToCart, handleQuantityChange, clearDepart, quantite }) {
  const { _id, src, alt, name, price, stock } = product;

  return (
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
              handleAddToCart({ _id, stock }, quantite, () => handleQuantityChange(0));
            }}
            onClearDepart={clearDepart}
            quantite={quantite}
          />
          <button
            className={styles.button}
            onClick={() => {
              handleAddToCart({ _id, stock }, quantite);
              clearDepart();
            }}
          >
            Ajouter au Panier
          </button>
        </div>
      </div>
    </div>
  );
}
