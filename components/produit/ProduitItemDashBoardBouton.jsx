import styles from '/styles/ProduitCard.module.css';
import AjouterEnleverPanier from './AjouterEnleverPanier';

export default function ProduitItemDashBoardBouton({ stock, depart, product, addToCart, handleAddToCart, handleQuantityChange, clearDepart, quantite }) {
  const { _id, name, price } = product;

  const handleCartClick = () => {
    addToCart({ _id, name, price }, quantite);
    handleAddToCart({ _id, stock }, quantite, () => handleQuantityChange(0));
  };

  const handleAddToCartClick = () => {
    handleAddToCart({ _id, stock }, quantite);
    clearDepart();
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
      <button
        className={styles.button}
        onClick={handleAddToCartClick}
      >
        Ajouter au Panier
      </button>
    </div>
  );
}
