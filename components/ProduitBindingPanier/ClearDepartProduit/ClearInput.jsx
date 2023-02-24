import React from 'react';
import styles from '/styles/AjouterEnleverPanier.module.css';

const ClearInput = ({ item, handleChange }) => {
  const clearInput = (item) => {
    handleChange(item, 0);
  };

  return (
    <button className={styles.buttonClear} onClick={() => clearInput(item)}>Clear</button>
  );
};

export default ClearInput;
