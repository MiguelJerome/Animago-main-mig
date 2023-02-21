import React from 'react';
import styles from '/styles/Cart.module.css';
import ProduitImagePanier from './ProduitImagePanier';
import ProduitInfoPanier from './ProduitInfoPanier';
import InputPanier from './InputPanier';
import PoubelleSupprimerPanier from './PoubelleSupprimerPanier';
import GrandTotalParItemResultat from './GrandTotalParItemResultat';

export default function ProduitListeMappingPanier({ cart, handleChange, removeFromCart }) {
  return (
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
  );
}
