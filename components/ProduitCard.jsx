import Image from 'next/image';
import styles from '../styles/ProduitCard.module.css';
import React, { useState, useEffect } from 'react';

export default function Gallerie({ images }) {
const [averageWidth, setAverageWidth] = useState(0);
const [averageHeight, setAverageHeight] = useState(0);

useEffect(() => {
setAverageWidth(images.reduce((max, { width }) => Math.max(max, width), 0));
setAverageHeight(images.reduce((max, { height }) => Math.max(max, height), 0));
}, [images]);

return (
  <div className={styles.gallerie}>
    {images.map(({ _id, src, alt, name, price, stock }) => (
      <div key={_id} className={styles.imageContainer}>
        <Image
            src={src}
            alt={alt}
            width={averageWidth}
            height={averageHeight}     
        />
          <div className={styles.imageInfo}>
          <p className={styles.imageId}>Produit</p>
          <p className={styles.imageId}>#{_id}</p>
          <p className={styles.imageName}>{name}</p>
          <p className={styles.imagePrice}>${price}</p>
          <p className={styles.imageStock}>En stock: {stock}</p>
            <button className={styles.button}>Ajouter au Panier</button>
        </div>
      </div>
    ))}
  </div>
);
}