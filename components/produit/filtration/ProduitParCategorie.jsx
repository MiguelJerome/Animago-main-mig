import React, { useState } from 'react';
import ProduitCard from '../ProduitCard';
import produits from '../../../models/produits';
//import {Produit, Panier, User,Commande} from '../../../server/models/index.cjs';
//const Produit = require('../../../server/models/Produit.cjs');

export default function ProduitData({ showPanierPanneau,toggler, categorie }) {
  /*
  console.log(Produit);
  console.log(Produit);
  console.log(Panier);
  console.log(User);
  console.log(Commande);
*/
  const filteredProduits = !categorie
    ? produits
    : produits.filter(({ categorie: produitCategorie }) => produitCategorie === categorie);
  
  return (
    <main>
      <ProduitCard showPanierPanneau={showPanierPanneau} toggler={toggler} produits={filteredProduits} />
    </main>
  );
}