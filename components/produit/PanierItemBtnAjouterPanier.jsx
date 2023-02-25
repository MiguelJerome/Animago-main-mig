import React, { useEffect } from 'react';
import styles from '/styles/ProduitCard.module.css';
import { useCart } from '/components/AchatPanier/UseCart.jsx';

export default function ProduitItemBtnAjouterPanier({
  showPanierPanneau,
  toggler,
  handleCartUpdateWithDepart,
  quantite,
  product,
  addToCart,
  getPurchaseQuantity
}) {

  const notifierSuccesAjoutPanier = (name, newPurchaseQuantity, currentPurchaseQuantity) => {
    if (newPurchaseQuantity > 0 && currentPurchaseQuantity > 0) {
      alert(`Le produit ${name} a été ajouté avec une quantité de ${ newPurchaseQuantity - currentPurchaseQuantity} et avec une nouvelle quantite total de ${newPurchaseQuantity} au panier avec succès !`);
    } else if (newPurchaseQuantity > 0) {
      alert(`Le produit ${name} a été ajouté avec une quantité de ${newPurchaseQuantity} au panier avec succès !`);
    }
  };
  
  const handleClick = (event) => {
    event.preventDefault();
    if (!quantite) {
      alert("Le nombre d'articles que vous essayez d'ajouter à votre panier est actuellement de 0. Veuillez augmenter la quantité pour ajouter des articles à votre panier.");
      return;
    }
    const currentPurchaseQuantity = getPurchaseQuantity(product._id);
    const newPurchaseQuantity = currentPurchaseQuantity + quantite;
  
    addToCart(product, newPurchaseQuantity - currentPurchaseQuantity);
    notifierSuccesAjoutPanier(product.name,newPurchaseQuantity,currentPurchaseQuantity);
    handleCartUpdateWithDepart(0);
    if (showPanierPanneau) {
      toggler();
    }
    
  };
  
  return (
    <button className={styles.button} onClick={handleClick}>
      Ajouter <div className={styles.panierItemQuantite}>{quantite > 0 ?`${quantite}` : '0'}</div> au Panier
    </button>
  );
}
