import { useCart } from '/components/AchatPanier/UseCart.jsx';
import styles from '/styles/AjouterEnleverPanier.module.css';

const ClearDepartProduit = ({ product, onQuantityChange }) => {
  const [,cart, , setCart] = useCart([]);
  
  const clearDepart = (newDepart) => {
    const updatedProduct = { ...product, stock: newDepart };
    setCart((prevCart) => {
      const cartWithoutItem = prevCart.filter((p) => p._id !== product._id);
      if (newDepart > 0) {
        return [...cartWithoutItem, updatedProduct];
      } else {
        return cartWithoutItem;
      }
    });
    onQuantityChange(0);
    onQuantityChange(newDepart);
  };

  return (
    <button className={styles.buttonClear} onClick={() => clearDepart(0)}>Clear</button>
  );
};

export default ClearDepartProduit;
