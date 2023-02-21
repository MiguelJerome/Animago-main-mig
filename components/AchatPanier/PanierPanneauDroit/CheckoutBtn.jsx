import React from 'react';
import Image from 'next/image';
import CheckoutPanier from '/public/img/cart.png';
import styles from '/styles/Cart.module.css';

const CheckoutBtn = ({ submitCheckout, calculateTotal, total }) => {
  function handleClick() {
    if (typeof calculateTotal === 'function' && calculateTotal() <= 0 || total <= 0) {
      alert("Vous ne pouvez pas Régler la note votre panier est vide");
    } else {
      submitCheckout();
    }
  }

  return (
    <button className={styles.boutonCheckout} onClick={handleClick}>
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
