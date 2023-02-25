import React from 'react';
import styles from '/styles/Cart.module.css';
import ClearInputAndDepart from "/components/ProduitBindingPanier/ClearDepartProduit/ClearInputAndDepart";
import { useState } from 'react';
import UpdateProductStockAndSetCart from '/components/ProduitBindingPanier/UpdateProductStockAndSetCart/UpdateProductStockAndSetCart';

const InputPanier = ({ product, item, handleChange }) => {
  const { updateProductStockAndSetCart } = UpdateProductStockAndSetCart({ produits: [product] });
  const [cart, setCart] = useState([]);

  const handleQuantityChange = (item, value) => {
    if (Number.isInteger(value)) {
      const updatedCart = [...cart];
      const itemIndex = updatedCart.findIndex((i) => i._id === item._id);
      if (itemIndex !== -1) {
        const initialStock = parseInt(item.stock);
        const purchaseQuantity = Number.isInteger(value) ? Math.max(Math.min(parseInt(value, 10), parseInt(initialStock)), 0) : 0;
        const diff = parseInt(purchaseQuantity) - parseInt(item.purchaseQuantity);
        const updatedItem = {
          ...item,
          purchaseQuantity,
          stock: parseInt(initialStock) - parseInt(diff),
        };
        const newCart = [
          ...updatedCart.slice(0, itemIndex),
          updatedItem,
          ...updatedCart.slice(itemIndex + 1),
        ];
        setCart(newCart);
      }
    }
  };
  return (
    <>
      <span>Qty:</span>
      <input
        className={styles.input}
        type="number"
        placeholder="1"
        value={item && item.purchaseQuantity !== undefined ? item.purchaseQuantity : ''}
        onChange={(e) => handleChange(item, parseInt(e.target.value))}
      />
      <ClearInputAndDepart product={product} item={item} onQuantityChange={handleQuantityChange} handleChange={handleChange} />
    </>
  );
};

export default InputPanier;
