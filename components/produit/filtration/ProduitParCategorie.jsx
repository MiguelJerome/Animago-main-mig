import React, { useState } from 'react';
import ProduitCard from '../ProduitCard';
import produits from '../../../models/produits';
import panier from '../../../models/panier';
import { useCart } from '/components/AchatPanier/UseCart.jsx';
//import {Produit, Panier, User,Commande} from '../../../server/models/index.cjs';
//const Produit = require('../../../server/models/Produit.cjs');

export default function ProduitParCategorie({ showPanierPanneau, toggler, categorie }) {
  const [cart, initCart, addToCart, removeFromCart, setCart,getPurchaseQuantity] = useCart();

  const filteredProduits = !categorie
    ? cart
    : cart.filter(({ categorie: produitCategorie }) => produitCategorie === categorie);
  
  return (
    <main>
      <ProduitCard
        showPanierPanneau={showPanierPanneau}
        toggler={toggler}
        produits={filteredProduits}
        addToCart={addToCart}
        getPurchaseQuantity={getPurchaseQuantity}
      />
    </main>
  );
}