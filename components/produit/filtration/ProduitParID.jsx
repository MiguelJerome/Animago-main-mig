import React from 'react';
import ProduitParCategorie from '/components/produit/filtration/ProduitParCategorie.jsx';
import ProductDetails from '/components/produit/ProduitDetails.jsx';
import styles from '/styles/ProduitDescription.module.css';
import panier from '/models/panier.jsx';

export default function ProduitParID({ productId }) {
  const product = Array.isArray(panier) ? panier.find(({_id}) => _id === productId) : null;

  return (
    <div className={styles.container}>
      <ProductDetails product={product || panier} />
    </div>
  );
}
