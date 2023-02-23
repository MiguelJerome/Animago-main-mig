import styles from '/styles/ProduitCard.module.css';
import AjouterEnleverPanier from './AjouterEnleverPanier';
import ProduitItemBtnAjouterPanier from './PanierItemBtnAjouterPanier';

export default function ProduitItemDashBoardBouton({
  showPanierPanneau,
  toggler,
  stock,
  depart,
  product,
  addToCart,
  handleAddToCart,
  handleQuantityChange,
  handleAddProductToCartWithQuantityReset,
  quantite
}) {
  const { _id, name, price } = product || {};

  const handleItemAddToCart = () => {
    addToCart({ _id, name, price }, quantite);
    handleAddToCart({ _id, stock }, quantite, () => handleQuantityChange(0));
  };

  const handleCartUpdateWithDepart = (newDepart) => {
    handleAddToCart({ _id, stock }, quantite, () => handleQuantityChange(0));
    handleAddProductToCartWithQuantityReset(newDepart);
  };

  return (
    <div className={styles.dashBoardButton}>
      <AjouterEnleverPanier
        stock={stock}
        depart={depart}
        product={product}
        onQuantityChange={handleQuantityChange}
        handleItemAddToCart={handleItemAddToCart}
        handleAddProductToCartWithQuantityReset={handleAddProductToCartWithQuantityReset}
        quantite={quantite}
      />
      <ProduitItemBtnAjouterPanier
        handleCartUpdateWithDepart={handleCartUpdateWithDepart}
        handleAddProductToCartWithQuantityReset={handleAddProductToCartWithQuantityReset}
        toggler={toggler}
        showPanierPanneau={showPanierPanneau}
      />
    </div>
  );
}
