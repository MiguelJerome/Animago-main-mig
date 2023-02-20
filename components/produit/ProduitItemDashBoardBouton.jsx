import styles from '/styles/ProduitCard.module.css';
import AjouterEnleverPanier from './AjouterEnleverPanier';
import ProduitItemBtnAjouterPanier from "./PanierItemBtnAjouterPanier"

export default function ProduitItemDashBoardBouton({ stock, depart, product, addToCart, handleAddToCart, handleQuantityChange, clearDepart, quantite }) {
  const { _id, name, price } = product;

  const handleCartClick = () => {
    addToCart({ _id, name, price }, quantite);
    handleAddToCart({ _id, stock }, quantite, () => handleQuantityChange(0));
  };

  const handleAddToCartClick = (newDepart) => {
    handleAddToCart({ _id, stock }, quantite, () => handleQuantityChange(0));
    clearDepart(newDepart);
  };
  
  

  return (
    <div className={styles.dashBoardButton}>
      <AjouterEnleverPanier
        stock={stock}
        depart={depart}
        product={product}
        onQuantityChange={handleQuantityChange}
        onAddToCart={handleCartClick}
        onClearDepart={clearDepart}
        quantite={quantite}
      />
      <ProduitItemBtnAjouterPanier handleAddToCartClick={handleAddToCartClick} clearDepart={clearDepart} />
    </div>
  );
}
