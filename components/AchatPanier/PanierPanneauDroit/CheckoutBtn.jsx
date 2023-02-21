import React from 'react';
import Image from 'next/image';
import CheckoutPanier from '/public/img/cart.png';
import styles from '/styles/Cart.module.css';

const CheckoutBtn = ({ submitCheckout }) => {
  return (
    <button className={styles.boutonCheckout} onClick={submitCheckout}>
      <Image
        src={CheckoutPanier}
        alt={"Checkout Panier" || 'Default Image'}
        priority={true}
        className={styles.imgCheckout}
      />
      <p className={styles.checkoutLabel}>Régler la note</p>
    </button>
  );
};

export default CheckoutBtn;
