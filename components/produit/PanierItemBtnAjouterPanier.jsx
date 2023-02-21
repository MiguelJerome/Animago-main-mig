import React, { useState } from 'react';
import styles from '/styles/ProduitCard.module.css';

export default function ProduitItemBtnAjouterPanier({ toggler, handleAddToCartClick,quantite }) {

  const handleClick = (event) => {
    event.preventDefault();
    handleAddToCartClick(0);
    toggler();
  };

  return (
    <>
      <button className={styles.button} onClick={handleClick}>
        Ajouter {quantite > 0 ? `(${quantite})` : ''} au Panier
      </button>
    </>
  );
}
