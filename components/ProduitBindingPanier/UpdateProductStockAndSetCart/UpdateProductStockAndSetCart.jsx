import { useRouter } from 'next/router';
import styles from '/styles/ProduitCard.module.css';
import { useCart } from '/components/AchatPanier/UseCart';
import DimensionsMoyennesImages from '/components/Images/DimensionsMoyennesImages.jsx';
import ProduitItem from "/components/produit/ProduitItem.jsx";
import GetterSetterProduitsState from "components/ProduitBindingPanier/GetterSetterProduitsState/GetterSetterProduitsState"

const updateProductStockAndSetCart = (produitsState, { _id, stock }, quantity, setProduits) => {
  if (quantity > stock) {
    return;
  }
  const productIndex = produitsState.findIndex((p) => p._id === _id);
  const updatedProduct = { ...produitsState[productIndex], stock: stock - quantity };
  const updatedProduits = [
    ...produitsState.slice(0, productIndex),
    updatedProduct,
    ...produitsState.slice(productIndex + 1),
  ];
  setProduits(updatedProduits);
};
