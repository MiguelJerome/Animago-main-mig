import { Inter } from '@next/font/google'
import React, { useState } from 'react';
const inter = Inter({ subsets: ['latin'] })
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProduitListe from '../../components/produit/ProduitListe';
import styles from '/styles/ProduitListe.module.css';
import PanierPanneau from '@/pages/AchatsPanier/PanierPanneau';

export default function ToutMagasiner() {
  const [visibleState, setVisible] = useState();
  const toggler = () => {
    setVisible(!visibleState);
  };
  return (
    
    <>
      {!visibleState && <PanierPanneau toggler={toggler} />}
      <main>
      <Header />
        <h1 className={styles.h1}>Tout magasiner</h1>
        <ProduitListe showPanierPanneau={visibleState} toggler={toggler} categorie={""} />
      </main>
      <Footer />
      </>
      
  );
}
