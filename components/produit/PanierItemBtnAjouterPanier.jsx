import React, { useEffect } from 'react';
import styles from '/styles/ProduitCard.module.css';
import { useCart } from '/components/AchatPanier/UseCart.jsx';
import { useRouter } from 'next/router';

export default function ProduitItemBtnAjouterPanier({
  showPanierPanneau,
  toggler,
  handleCartUpdateWithDepart,
  quantite,
  product,
}) {
  const [cart, , addToCart, setCart] = useCart();
  const router = useRouter();

  useEffect(() => {
    if (quantite) {
      addToCart(product);
      setCart([...cart, product]);
    }
  }, [cart, product, quantite]);

  const notifierSuccesAjoutPanier = (name, quantite) => {
    alert(`Le produit ${name} a été ajouté avec une quantité de ${quantite} au panier avec succès !`);
  };
  
  const handleClick = (event) => {
    event.preventDefault();
    if (!quantite) {
      alert("Le nombre d'articles que vous essayez d'ajouter à votre panier est actuellement de 0. Veuillez augmenter la quantité pour ajouter des articles à votre panier.");
      return;
    }
    handleCartUpdateWithDepart(0);
    if (showPanierPanneau) {
      toggler();
    }
    notifierSuccesAjoutPanier(product.name, quantite);
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      Ajouter <div className={styles.panierItemQuantite}>{quantite > 0 ?`${quantite}` : '0'}</div> au Panier
    </button>
  );
}
