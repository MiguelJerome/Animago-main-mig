import React from 'react';
import styles from '/styles/Cart.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ProduitImagePanier({ src, alt, averageWidth, averageHeight, name, onClick }) {
  const router = useRouter();
  const DEFAULT_WIDTH = 100;
  const DEFAULT_HEIGHT = 100;
  return (
    <Image
      className={`${styles.imgCard} ${styles.img}`}
      src={src}
      alt={alt || 'Default Image'}
      width={Number(averageWidth) || DEFAULT_WIDTH}
      height={Number(averageHeight) || DEFAULT_HEIGHT}
      priority={true}
      onClick={() => {
        onClick();
        router.push(`/produit/${name}`);
      }}
    />
  );
}
