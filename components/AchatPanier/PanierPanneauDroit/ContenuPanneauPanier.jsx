import React from 'react';
import ListeItemPanier from './ListeItemPanier';
import PanierVideMessage from '/components/AchatPanier/PanierVideMessage';
import TotalAchatParItemResultat from '/components/MagasinCalcul/TotalAchatParItemResultat';

function ContenuPanneauPanier({ orders, cart, handleChange, removeFromCart, router, calculateTotal, submitCheckout, addToCart }) {
  if (cart.length === 0) {
    const time = 3000;
    setTimeout(() => {
      location.reload();
    }, time);
    return <PanierVideMessage time={time} />;
  }

  return (
    <>
      <ListeItemPanier
        cart={cart}
        handleChange={handleChange}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        router={router}
        calculateTotal={calculateTotal}
        total={<TotalAchatParItemResultat cart={cart} />}
        submitCheckout={submitCheckout}
      />
    </>
  );
}

export default ContenuPanneauPanier;
