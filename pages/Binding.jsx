import { Inter } from '@next/font/google'
import Header from '../components/Header';
import Footer from '../components/Footer';
export { default as PanierVideMessage } from '/components/AchatPanier/PanierVideMessage.jsx';
import Binding from "/components/ProduitBindingPanier/BindingTroisComponent"
import React, { useState } from 'react';
import PanierPanneau from '@/pages/AchatsPanier/PanierPanneau';

const inter = Inter({ subsets: ['latin'] })

export default function BindingComponentComboPanierProduit() {
    const [visibleState, setVisible] = useState(false);
  const toggler = () => {
    setVisible(!visibleState);
  };
  return (
    <>
          <Header />
          {!visibleState && <PanierPanneau toggler={toggler} />}
          <main>
              <Binding showPanierPanneau={visibleState} toggler={toggler}/>
      </main>
      <Footer />
    </>
  );
}