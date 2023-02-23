import React from 'react';
import styles from '/styles/Cart.module.css';
import ClearDepartProduit from "/components/ProduitBindingPanier/ClearDepartProduit/ClearDepartProduit"

const InputPanier = ({ item, handleChange }) => {
 
  const clearInput = (item) => {
    handleChange(item, 0);
  };
  
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
      <ClearDepartProduit product={item} onQuantityChange={handleChange} clearInput={clearInput} />
    </>
  );
};

export default InputPanier;
