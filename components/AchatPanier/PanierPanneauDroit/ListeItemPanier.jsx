import React from 'react';
import Image from 'next/image';
import { useCart } from '/components/AchatPanier/UseCart.jsx';
import { useRouter } from 'next/router';
import styles from '/styles/Cart.module.css';
import CheckoutPanier from '/public/img/cart.png';

const ListeItemPanier = ({ cart, handleChange, addToCart, removeFromCart, calculateTotal, total, submitCheckout }) => {
  const router = useRouter();

  return (
    <>
      <h3 className={styles.subTitle}>Articles dans votre panier:</h3>
      <ul>
        {cart.map((item) => (
          <React.Fragment key={item._id}>
            <li className={styles.produitDisponible}>
              <Image
                className={`${styles.imgCard} ${styles.img}`}
                src={item.src}
                alt={item.alt || 'Default Image'}
                width={Number(item.averageWidth) || 100}
                height={Number(item.averageHeight) || 100}
                onClick={() => router.push(`/produit/${item.name}`)}
                priority={true}
              />
              <div>
                <div className={styles.cartFormWragpe}>
                  <p className={styles.productInfo}>{item.name}</p>
                  <p className={styles.productInfo}>Prix: ${item.price}</p>
                  <p className={styles.productInfo}>En Stock: {item.stock}</p>
                </div>
                <span>Qty:</span>
                <input
                  className={styles.input}
                  type="number"
                  placeholder="1"
                  value={item.purchaseQuantity}
                  onChange={(e) => handleChange(item, parseInt(e.target.value))}
                />
                <span role="img" aria-label="trash" onClick={() => removeFromCart(item)} className={styles.imgCard}>🗑️</span>
              </div>
            </li>
            <li className={styles.itemTotal}>
              {item.name} - {parseInt(item.purchaseQuantity, 10)} x ${parseFloat(item.price).toFixed(2)} = $
              {(parseInt(item.purchaseQuantity, 10) * parseFloat(item.price)).toFixed(2)}
            </li>
          </React.Fragment>
        ))}
      </ul>
      <div className={styles.grandTotal}>
        <strong>Grand Total: ${parseFloat(total).toFixed(2)}</strong>
      </div>
      <div>
        <strong>Total item: {calculateTotal()}</strong>
        <button className={styles.boutonCheckout} onClick={submitCheckout}>
          <Image
            src={CheckoutPanier}
            alt={"Checkout Panier" || 'Default Image'}
            className={styles.imgCheckout}
            priority={true}
          />
        </button>
        <span>(log in to check out)</span>
      </div>
    </>
  );
};

export default ListeItemPanier;
