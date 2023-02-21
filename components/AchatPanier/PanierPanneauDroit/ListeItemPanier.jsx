import React from 'react';
import styles from '/styles/Cart.module.css';
import ProduitImagePanier from './ProduitImagePanier';
import ProduitInfoPanier from './ProduitInfoPanier';
import InputPanier from './InputPanier';
import PoubelleSupprimerPanier from './PoubelleSupprimerPanier';
import GrandTotalParItemResultat from './GrandTotalParItemResultat';
import GrandTotalItemResultat from './GrandTotalItemResultat';
import GrandTotalMontantResultat from './GrandTotalMontantResultat';
import CheckoutBtn from './CheckoutBtn';

const ListeItemPanier = ({ cart, handleChange, addToCart, removeFromCart, calculateTotal, total, submitCheckout }) => {
  return (
    <>
      <h3 className={styles.subTitle}>Articles dans votre panier:</h3>
      <ul>
        {cart.map((item) => (
          <React.Fragment key={item._id}>
            <li className={styles.produitDisponible}>
              <ProduitImagePanier item={item} />
              <div>
                <ProduitInfoPanier item={item} />
                <InputPanier item={item} handleChange={handleChange} />
                <PoubelleSupprimerPanier item={item} removeFromCart={removeFromCart} />
              </div>
            </li>
            <GrandTotalParItemResultat item={item} />
          </React.Fragment>
        ))}
      </ul>
      <GrandTotalMontantResultat total={total} />
      <div>
        <GrandTotalItemResultat calculateTotal={calculateTotal} />
        <CheckoutBtn submitCheckout={submitCheckout} calculateTotal={calculateTotal} total={total} /> 
      </div>
    </>
  );
};

export default ListeItemPanier;
