import React from 'react';
import ListeItemPanier from './ListeItemPanier';
import PanierVideMessage from '/components/AchatPanier/PanierVideMessage';

function ContenuPanneauPanier({cart, handleChange, removeFromCart, router, calculateTotal, total, submitCheckout}) {
  return (
    <>
      {cart.length === 0 ? (
        <PanierVideMessage />
      ) : (
        <ListeItemPanier
          cart={cart}
          handleChange={handleChange}
          removeFromCart={removeFromCart}
          router={router}
          calculateTotal={calculateTotal}
          total={total}
          submitCheckout={submitCheckout}
        />
      )}
    </>
  );
}

export default ContenuPanneauPanier;
