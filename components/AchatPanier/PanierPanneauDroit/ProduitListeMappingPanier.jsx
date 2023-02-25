import React from 'react';
import styles from '/styles/Cart.module.css';
import ProduitImagePanier from './ProduitImagePanier';
import ProduitInfoPanier from './ProduitInfoPanier';
import InputPanier from './InputPanier';
import PoubelleSupprimerPanier from './PoubelleSupprimerPanier';
import GrandTotalParItemResultat from './GrandTotalParItemResultat';

export default function ProduitListeMappingPanier({
  cart,
  handleChange,
  removeFromCart,
  getRemainingStock,
  getPurchaseQuantity
}) {
  return (
    <ul>
      {cart && cart.map((item) => (
        <React.Fragment key={item._id}>
          <li className={styles.produitDisponible}>
            <ProduitImagePanier item={item} />
            <div>
              <ProduitInfoPanier
                cart={cart}
                item={item}
                handleChange={handleChange}
                getRemainingStock={getRemainingStock}
                getPurchaseQuantity={getPurchaseQuantity}
              />
              <InputPanier
                cart={cart}
                item={item}
                handleChange={handleChange}
                getRemainingStock={getRemainingStock}
                getPurchaseQuantity={getPurchaseQuantity}
              />
              <PoubelleSupprimerPanier item={item} removeFromCart={removeFromCart} />
            </div>
          </li>
          <GrandTotalParItemResultat item={item} />
        </React.Fragment>
      ))}
    </ul>
  );
}
