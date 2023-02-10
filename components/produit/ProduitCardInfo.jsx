import { useRouter } from 'next/router'
import Image from 'next/image';
import styles from '/styles/ProduitCard.module.css';
import ProduitCard from '/components/produit/ProduitCard.jsx'
import React, { useState } from 'react';
import AjouterEnleverPanier from "./AjouterEnleverPanier.jsx";

export default function ProduitCardInfo({ produits }) {
 
  return (
    <>
    <div className={styles.gallerie}>
      {produitsState.map(({ _id, src, alt, name, price, stock }) => (
        <div key={_id} className={styles.imageContainer}>   
          <Image className={styles.imgCard}
              src={src}
              alt={alt}
              width={averageWidth}
            height={averageHeight} 
            onClick={() => router.push(`/produit/${name}`)}
          />
            <div className={styles.imageInfo}>
            <p className={styles.imageId}>Produit</p>
            <p className={styles.imageId}>#{_id}</p>
            <p className={styles.imageName}>{name}</p>
            <p className={styles.imagePrice}>C${price}</p>
            <p className={styles.imageStock}><span className={styles.stock} >{stock}</span> items en stock</p>
                <AjouterEnleverPanier stock={stock} depart={quantite} onAddToCart={() => handleAddToCart(_id, stock)} />
                <button className={styles.button} onClick={() => { clearDepart(0); handleAddToCart(_id, stock); }}>
                Ajouter au Panier
                </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};
