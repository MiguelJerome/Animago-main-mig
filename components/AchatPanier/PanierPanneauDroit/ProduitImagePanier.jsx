import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '/styles/Cart.module.css';

const ProduitImagePanier = ({ item }) => {
  const router = useRouter();

  return (
    <Image
      className={`${styles.imgCard} ${styles.img}`}
      src={item.src}
      alt={item.alt || 'Default Image'}
      width={Number(item.averageWidth) || 100}
      height={Number(item.averageHeight) || 100}
      priority={true}
      onClick={() => router.push(`/produit/${item.name}`)}
    />
  );
};

export default ProduitImagePanier;
