import React, { useEffect, useState } from 'react';
import styles from '/styles/Cart.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

export function Produitsdisponibles({ produits }) {
  const router = useRouter();
  const DEFAULT_WIDTH = 100;
  const DEFAULT_HEIGHT = 100;
    return (
      <>
        <h3 className={styles.subTitle}>Produits disponibles à l'achat :</h3>
        <ul>
        {produits.map(({ _id, src, alt, averageWidth, averageHeight, name, price }) => (
            <li className={styles.produitDisponible} key={_id}>
              <Image
                className={`${styles.imgCard} ${styles.img}`}
                src={src}
                alt={alt || 'Default Image' }
                width={Number(averageWidth) || DEFAULT_WIDTH}
                height={Number(averageHeight) || DEFAULT_HEIGHT}
                priority={true}
                onClick={() => router.push(`/produit/${name}`)}
              />
              <div className={styles.cartFormWrapper}>
                <p className={styles.productInfo}>{name}</p>
                <p className={styles.productInfo}>${price}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
}