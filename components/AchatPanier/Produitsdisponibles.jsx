import React, { useEffect, useState } from 'react';
import styles from '/styles/Cart.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import produits from '/models/produits.jsx';

export function Produitsdisponibles({ produits }) {
    const router = useRouter();
    return (
      <>
        <h3 className={styles.subTitle}>Produits disponibles à l'achat :</h3>
        <ul>
          {produits.map((product) => (
            <li className={styles.produitDisponible} key={product._id}>
              <Image
                className={`${styles.imgCard} ${styles.img}`}
                src={product.src}
                alt={product.alt}
                width={Number(product.averageWidth) || 100}
                height={Number(product.averageHeight) || 100}
                onClick={() => router.push(`/produit/${product.name}`)}
              />
              <div className={styles.cartFormWragpe}>
                <p className={styles.productInfo}>{product.name}</p>
                <p className={styles.productInfo}>${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
}