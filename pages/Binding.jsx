import { Inter } from '@next/font/google'
import Header from '../components/Header';
import Footer from '../components/Footer';
export { default as PanierVideMessage } from '/components/AchatPanier/PanierVideMessage.jsx';
import BindingTroisComponent from "/components/ProduitBindingPanier/BindingTroisComponent"
import React, { useState } from 'react';
import PanierPanneau from '@/pages/AchatsPanier/PanierPanneau';
import produits from '/models/produits';
import ParentComponentBinding from "/components/ProduitBindingPanier/ParentComponentBinding"
import { useCart } from '/components/AchatPanier/UseCart.jsx';


const inter = Inter({ subsets: ['latin'] })

export default function BindingComponentComboPanierProduit(props) {
    const [visibleState, setVisible] = useState(false);
  const toggler = () => {
    setVisible(!visibleState);
    };
    const [produitsState, setProduits] = useState(produits);
    const [, addToCart] = useCart();
  
    
    const handleAddToCart = ({ _id, stock }, quantity) => {
      if (quantity > stock) {
        return;
      }
      const productIndex = produitsState.findIndex((p) => p._id === _id);
      const updatedProduct = { ...produitsState[productIndex], stock: stock - quantity };
      const updatedProduits = [
        ...produitsState.slice(0, productIndex),
        updatedProduct,
        ...produitsState.slice(productIndex + 1),
      ];
      setProduits(updatedProduits);
    };

  return (
    <>
          <Header />
          {!visibleState && <PanierPanneau toggler={toggler} />}
          <main>
              <BindingTroisComponent
            showPanierPanneau={visibleState}
            item={produits}
            handleAddToCart={handleAddToCart}
            handleQuantityChange={ParentComponentBinding.handleQuantityChange} // pass the function as a prop
            onQuantityChange={() => {}} 
            />
      </main>
      <Footer />
    </>
  );
}