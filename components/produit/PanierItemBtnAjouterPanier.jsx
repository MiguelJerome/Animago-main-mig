import React, { useState } from 'react';
import styles from '/styles/ProduitCard.module.css';
import { useRouter } from 'next/router';
import PanierPanneau from '@/pages/AchatsPanier/PanierPanneau';

export default function ProduitItemBtnAjouterPanier({ handleAddToCartClick }) {
  const router = useRouter();
  const [visibleState, setVisible] = useState(false);

  const toggler = () => {
    setVisible(!visibleState);
  };

  const handleClick = () => {
    handleAddToCartClick();
    toggler();
  };

  return (
    <>
      <button className={styles.button} onClick={handleClick}>
        Ajouter au Panier
      </button>
      {visibleState && <PanierPanneau toggler={toggler} />}
    </>
  );
}
