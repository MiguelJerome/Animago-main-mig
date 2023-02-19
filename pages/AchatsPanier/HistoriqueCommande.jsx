import React from 'react';
import { Inter } from '@next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useCart } from '/components/AchatPanier/UseCart.jsx';
import styles from '/styles/Cart.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function PanierPleinEcran({ purchaseDate }) {
  const router = useRouter();
  const [cart] = useCart();


  return (
    <>
      <Header />
      <div className={styles.containerMainOrder}>
        <div className={styles.OrderTitle}>
          <h2>Historique des commandes pour {purchaseDate} </h2>
        </div>
        <ul className={styles.produitsDisponibles}>
          {cart.map((item) => (
            <li key={item._id} className={styles.produitDisponible}>
              <Image
                className={`${styles.imgCard} ${styles.img}`}
                src={item.src}
                alt={item.alt || 'Default Image'}
                width={Number(item.averageWidth) || 100}
                height={Number(item.averageHeight) || 100}
                onClick={() => router.push(`/produit/${item.name}`)}
              />
              <div>
                <div className={styles.cartFormWragper}>
                  <p className={styles.productInfo}>{item.name}</p>
                  <p className={styles.productInfo}>Prix: ${item.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const currentDate = new Date().toLocaleDateString();
  return {
    props: {
      purchaseDate: currentDate,
    },
  };
}
