import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '/styles/Cart.module.css';

export default function OrderHistory({ cart, purchaseDate, purchaseTime, currentTime, orders }) {
    const router = useRouter();
    console.log(`Order history is Now: ${purchaseDate} ${currentTime}`, orders);

    return (
        <div className={styles.containerMainOrder}>
            <div className={styles.OrderTitle}>
                <h2>Historique des commandes pour {purchaseDate} </h2>
                <h2>{currentTime} </h2>
            </div>

            {orders && orders.length > 0 ? (
                <ul className={styles.produitsDisponibles}>
                    {orders.map((itemsArray, index) => (
                        <React.Fragment key={index}>
                            {itemsArray.map((item) => (
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
                        </React.Fragment>
                    ))}
                </ul>
            ) : (
                <p>Aucune commande pour cette date.</p>
            )}
        </div>
    );
}
