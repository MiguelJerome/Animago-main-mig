import React, { useState } from 'react';
import ProduitItemDashBoardBouton from '/components/produit/ProduitItemDashBoardBouton';
import ProduitItemBtnAjouterPanier from '/components/produit/PanierItemBtnAjouterPanier';
import PanierPanneau from '@/pages/AchatsPanier/PanierPanneau';
import { useCart } from '/components/AchatPanier/UseCart';
import InputPanier from "/components/AchatPanier/PanierPanneauDroit/InputPanier"
import produits from '/models/produits';

export default function BindingTroisComponent({showPanierPanneau }){
    const [quantite, setQuantite] = useState(0);
    const [toggler, setToggler] = useState(false);
    const [produitsState, setProduits] = useState(produits);
    const [, addToCart, cart, setCart] = useCart(); // retrieve cart using useCart
  
    const handleAddToCart = ({ _id, stock }, quantity) => {
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
  
    const handleToggler = () => {
      setToggler(!toggler);
    };
  
    const handleQuantityChange = (newQuantity) => {
      setQuantite(newQuantity);
    };
  
    const handleAddToCartClick = (newDepart) => {
      handleAddToCart({ _id, stock }, quantite, () => handleQuantityChange(0));
      clearDepart(newDepart);
    };
  
    const clearDepart = (newDepart) => {
      addToCart(produits, -quantite);
      handleQuantityChange(0);
      handleQuantityChange(newDepart);
    };
  
    const handleChange = (item, value) => {
      if (Number.isInteger(value)) {
        const updatedCart = [...cart];
        const itemIndex = updatedCart.findIndex((i) => i._id === item._id);
        const stock = updatedCart[itemIndex].stock;
        const updatedItem = {
          ...updatedCart[itemIndex],
          purchaseQuantity: value >= 0 ? Math.min(parseInt(value, 10), stock) : 0,
        };
        const newCart = [
          ...updatedCart.slice(0, itemIndex),
          updatedItem,
          ...updatedCart.slice(itemIndex + 1),
        ];
        setCart(newCart);
      }
    };
  
    return (
        <>
      <div>
        <PanierPanneau toggler={toggler} />
        <InputPanier item={produitsState} handleChange={handleChange} />
        <ProduitItemDashBoardBouton
          stock={produitsState.stock}
          depart={produitsState.depart}
          product={produits}
          addToCart={addToCart}
          handleAddToCart={handleAddToCart}
          handleQuantityChange={handleQuantityChange}
          clearDepart={clearDepart}
          quantite={quantite}
        />
        <ProduitItemBtnAjouterPanier
          showPanierPanneau={showPanierPanneau}
          toggler={toggler}
          handleAddToCartClick={handleAddToCartClick}
          quantite={quantite}
        />
            </div>
            </>
    );
  };
  
