import React from 'react';
import styles from '/styles/ProduitCard.module.css';
import { useCart } from '/components/AchatPanier/UseCart.jsx';

export default function ProduitItemBtnAjouterPanier({
  showPanierPanneau,
  toggler,
  handleCartUpdateWithDepart,
  quantite,
  product,
}) {
  const [cart, , addToCart] = useCart();

  const handleClick = (event) => {
    event.preventDefault();
    if (!quantite) {
      alert("Le nombre d'articles que vous essayez d'ajouter à votre panier est actuellement de 0. Veuillez augmenter la quantité pour ajouter des articles à votre panier.");
      return;
    }
    addToCart(product);
    handleCartUpdateWithDepart(0);

    if (showPanierPanneau) {
      toggler();
    }

    
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      Ajouter {quantite > 0 ? `(${quantite})` : ''} au Panier
    </button>
  );
}
