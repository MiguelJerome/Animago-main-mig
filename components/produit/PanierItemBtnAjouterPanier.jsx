import React, { useState } from 'react';
import styles from '/styles/ProduitCard.module.css';

export default function ProduitItemBtnAjouterPanier({showPanierPanneau, toggler, handleAddToCartClick,quantite }) {

 
  const handleClick = (event) => {
    event.preventDefault();
    handleAddToCartClick(0);
    if (showPanierPanneau) {
      toggler();
    }
  };

  return (
    <>
      <button className={styles.button} onClick={handleClick}>
        Ajouter {quantite > 0 ? `(${quantite})` : ''} au Panier
      </button>
    </>
  );
}
