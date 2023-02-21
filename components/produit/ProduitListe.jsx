import React, { useState } from 'react';
import PanierPanneau from '@/pages/AchatsPanier/PanierPanneau';
import styles from '/styles/ProduitListe.module.css';
import ProduitParCategorie from "./filtration/ProduitParCategorie";

export default function ProduitListe({ toggler, categorie}) {

  return (
    <div className={styles.container}>
      <ProduitParCategorie toggler={toggler} categorie={categorie} />
    </div>
  );
}
