import React from 'react';
import ProduitCard from '../ProduitCard';
import { useCart } from '/components/AchatPanier/UseCart.jsx';

export default function ProduitParCategorie({ showPanierPanneau, toggler, categorie, cartProps }) {
  // const [
  //   cart = [],
  //   initCart,
  //   addToCart,
  //   removeFromCart,
  //   setCart,
  //   getPurchaseQuantity,
  //   getRemainingStock
  // ] = Array.isArray(cartProps) ? cartProps : [];
  const [cart, initCart, addToCart, removeFromCart, setCart,getPurchaseQuantity] = useCart();

  const filteredProduits = cart
    ? categorie
      ? cart.filter(({ categorie: produitCategorie }) => produitCategorie === categorie)
      : cart
    : [];
  
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

export async function getServerSideProps(context) {
  const [
    cart,
    initCart,
    addToCart,
    removeFromCart,
    setCart,
    getPurchaseQuantity,
    getRemainingStock
  ] = useCart();

  return {
    props: {
      cart: cart || [],
      addToCart: addToCart,
      getPurchaseQuantity: getPurchaseQuantity,
      initCart: initCart,
      removeFromCart: removeFromCart,
      setCart: setCart,
      getRemainingStock: getRemainingStock
    },
  };
}
