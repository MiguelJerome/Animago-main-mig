import { useRouter } from 'next/router'
import Image from 'next/image';
import styles from '../styles/ProduitCard.module.css';
import React, { useState, useEffect } from 'react';

export default function Gallerie({ produits }) {
const [averageWidth, setAverageWidth] = useState(0);
const [averageHeight, setAverageHeight] = useState(0);

useEffect(() => {
setAverageWidth(produits.reduce((max, { width }) => Math.max(max, width), 0));
setAverageHeight(produits.reduce((max, { height }) => Math.max(max, height), 0));
}, [produits]);

  const router = useRouter()
  return (
  <div className={styles.gallerie}>
    {produits.map(({ _id, src, alt, name, price, stock }) => (
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
          <p className={styles.imageStock}>{stock} items en stock</p>
            <button className={styles.button}>Ajouter au Panier</button>
        </div>
      </div>
    ))}
  </div>
);
}