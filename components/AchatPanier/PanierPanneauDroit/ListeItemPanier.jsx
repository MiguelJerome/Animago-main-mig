import React from 'react';
import ProduitListeMappingPanier from './ProduitListeMappingPanier';
import GrandTotalMontantResultat from './GrandTotalMontantResultat';
import GrandTotalItemResultat from './GrandTotalItemResultat';
import CheckoutBtn from './CheckoutBtn';
import PanierTitreMessage from './PanierTitreMessage';
import TotalAchatParItemResultat from '/components/MagasinCalcul/TotalAchatParItemResultat';

export default function ListeItemPanier(props) {
  const { cart, handleChange, removeFromCart, calculateTotal, submitCheckout } = props;

  return (
    <>
      <PanierTitreMessage />
      <ProduitListeMappingPanier cart={cart} handleChange={handleChange} removeFromCart={removeFromCart} />
      <GrandTotalMontantResultat total={<TotalAchatParItemResultat cart={cart} />} />
      <div>
        <GrandTotalItemResultat calculateTotal={calculateTotal} />
        <CheckoutBtn submitCheckout={submitCheckout} calculateTotal={calculateTotal} total={<TotalAchatParItemResultat cart={cart} />} />
      </div>
    </>
  );
}
