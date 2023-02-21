import React from 'react';
import styles from '/styles/Cart.module.css';

const InputPanier = ({ item, handleChange }) => {
  return (
    <>
      <span>Qty:</span>
      <input
        className={styles.input}
        type="number"
        placeholder="1"
        value={item.purchaseQuantity}
        onChange={(e) => handleChange(item, parseInt(e.target.value))}
      />
    </>
  );
};

export default InputPanier;
