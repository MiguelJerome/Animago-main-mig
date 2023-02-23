import React from 'react';
import styles from '/styles/Cart.module.css';

const InputPanier = ({ item, handleChange, clearInput }) => {
  return (
    <>
      <span>Qty:</span>
      <input
        className={styles.input}
        type="number"
        placeholder="1"
        value={item && item.purchaseQuantity !== undefined ? item.purchaseQuantity : ''}
        onChange={(e) => handleChange(item, parseInt(e.target.value))}
      />
      <button className={styles.buttonClear} onClick={clearInput}>Clear</button>
    </>
  );
};

export default InputPanier;
