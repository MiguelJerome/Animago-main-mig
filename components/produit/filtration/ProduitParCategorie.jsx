import React, { useState } from 'react';
import ProduitCard from '../ProduitCard';
import produits from '../../../models/produits';

export default function ProduitData({ categorie }) {
  const filteredProduits = !categorie
    ? produits
    : produits.filter(({ categorie: produitCategorie }) => produitCategorie === categorie);

  return (
    <main>
      <ProduitCard produits={filteredProduits} />
    </main>
  );
}