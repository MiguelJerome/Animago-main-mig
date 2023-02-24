import React from 'react';
import styles from '/styles/Cart.module.css';
import ClearDepartProduit from "/components/ProduitBindingPanier/ClearDepartProduit/ClearDepartProduit"
import ClearInput from "/components/ProduitBindingPanier/ClearDepartProduit/ClearInput";

const InputPanier = ({ item, handleChange }) => {
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
      <ClearInput item={item} handleChange={handleChange} />
    </>
  );
};

export default InputPanier;
