import React from 'react';
import ProduitListeMappingPanier from './ProduitListeMappingPanier';
import GrandTotalMontantResultat from './GrandTotalMontantResultat';
import GrandTotalItemResultat from './GrandTotalItemResultat';
import CheckoutBtn from './CheckoutBtn';
import PanierTitreMessage from './PanierTitreMessage';

export default function ListeItemPanier(props) {
  const { cart, handleChange, removeFromCart, calculateTotal, total, submitCheckout } = props;

  return (
    <>
      <PanierTitreMessage />
      <ProduitListeMappingPanier cart={cart} handleChange={handleChange} removeFromCart={removeFromCart} />
      <GrandTotalMontantResultat total={total} />
      <div>
        <GrandTotalItemResultat calculateTotal={calculateTotal} />
        <CheckoutBtn submitCheckout={submitCheckout} calculateTotal={calculateTotal} total={total} />
      </div>
    </>
  );
}
