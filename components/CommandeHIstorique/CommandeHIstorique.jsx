import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '/styles/CommandeHistorique/CommandeHistorique.module.css';

export default function CommandeHIstorique({ cart, purchaseDate, purchaseTime, currentTime, orders }) {
  const router = useRouter();
    const [total, setTotal] = useState(0);
    
    useEffect(() => {
        calcTotal();
      }, [cart]);

  const calculateTotal = () => {
    let sum = 0;
    orders.forEach((itemsArray) => {
      itemsArray.forEach((item) => {
        sum += parseInt(item.purchaseQuantity);
      });
    });
    return sum;
  };

  const calcTotal = () => {
    let sum = 0;
    orders.forEach((itemsArray) => {
      itemsArray.forEach((item) => {
        sum += parseFloat(item.price) * parseInt(item.purchaseQuantity);
      });
    });
    setTotal(sum.toFixed(2));
  };

  console.log(`Order history is Now: ${purchaseDate} ${currentTime}`, orders);

  return (
    <div className={styles.containerMainOrder}>
      <div className={styles.OrderTitle}>
        <h2>Historique des commandes pour {purchaseDate}</h2>
        <h2>{currentTime}</h2>
      </div>
      {orders && orders.length > 0 ? (
        <ul className={styles.produitsDisponibles}>
          {orders.map((itemsArray, index) => (
            <React.Fragment key={index}>
              {itemsArray.map((item) => {
                if (item.purchaseQuantity > 0) {
                  return (
                    <li key={item._id} className={styles.produitDisponible}>
                      <Image
                        className={`${styles.imgCard} ${styles.img}`}
                        src={item.src}
                        alt={item.alt || 'Default Image'}
                        width={Number(item.averageWidth) || 400}
                        height={Number(item.averageHeight) || 400}
                        onClick={() => router.push(`/produit/${item.name}`)}
                      />
                      <div>
                        <div className={styles.cartFormWragper}>
                          <p className={styles.productInfo}>{item.name}</p>
                          <p className={styles.productInfo}>Prix: ${item.price}</p>
                          <p className={styles.productInfo}>Quantite: {item.purchaseQuantity}</p>
                        </div>
                      </div>
                    </li>
                  );
                } else {
                  return null;
                }
              })}
            </React.Fragment>
          ))}
          <div className={styles.grandTotal}>
            <strong>Grand Total: ${total}</strong>
          </div>
          <div>
            <strong>Total item: {calculateTotal()}</strong>
          </div>
        </ul>
      ) : (
        <p>Aucune commande pour cette date.</p>
      )}
    </div>
  );
}
