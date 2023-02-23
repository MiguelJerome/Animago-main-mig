import React, { useState } from 'react';
import BindingTroisComponent from './BindingTroisComponent';
import InputPanier from '/components/AchatPanier/PanierPanneauDroit/InputPanier';
import ProduitItemDashBoardBouton from '/components/produit/ProduitItemDashBoardBouton';
import PanierPanneau from '@/pages/AchatsPanier/PanierPanneau';
import { useCart } from '/components/AchatPanier/UseCart';
import ProduitInfoPanier from '/components/AchatPanier/ProduitInfoPanier.jsx';
import styles from '/styles/AjouterEnleverPanier.module.css';
import AjouterEnleverPanier from '/components/produit//AjouterEnleverPanier';

export default function ParentComponentBinding({AjouterEnleverPanier }) {
    const [item, setItem] = useState({ id: 1, name: 'Item 1', purchaseQuantity: 0, stock: 10 });
    const [, addToCart, cart, setCart] = useCart([]);
    const [toggler, setToggler] = useState(false);

    const [quantite, setQuantite] = useState(0);

    const handleQuantityChange = (newQuantity) => {
        
            if (typeof setQuantite === "function") {
                setQuantite(newQuantity);
            }
       
        setItem((prevItem) => {
            const { id, name, purchaseQuantity, stock } = prevItem;
            const updatedItem = {
                id,
                name,
                purchaseQuantity: newQuantity >= 0 ? Math.min(newQuantity, stock) : 0,
                stock,
            };
            return updatedItem;
        });
    };
  
    const clearDepart = () => {
      setQuantite(0);
    };
  
    const handleAddToCartClick = () => {
      handleAddToCart({ _id: product._id, stock: product.stock }, quantite);
      clearDepart();
    };

    const handleInputChange = (item, value) => {
        const updatedItem = { ...item, purchaseQuantity: value };
        setItem(updatedItem);
    };

    const handleChange = (product, value) => {
        if (Number.isInteger(value) && Array.isArray(cart)) {
            const updatedCart = [...cart];
            const itemIndex = updatedCart.findIndex((i) => i._id === product._id);
            const stock = updatedCart[itemIndex].stock;
            const updatedItem = {
                ...updatedCart[itemIndex],
                purchaseQuantity: value >= 0 ? Math.min(parseInt(value, 10), stock) : 0,
            };
            const newCart = [                ...updatedCart.slice(0, itemIndex),                updatedItem,                ...updatedCart.slice(itemIndex + 1),            ];
            setCart(newCart);
        }
    };
      

    return (
        <>
            <InputPanier item={item} handleChange={handleInputChange} />
            <BindingTroisComponent
                handleQuantityChange={handleQuantityChange}
                showPanierPanneau={toggler}
                handleAddToCart={handleAddToCartClick}
                onQuantityChange={AjouterEnleverPanier.onQuantityChange}
                item={item}
                handleChange={handleChange}
                quantite={quantite}
                decrementer={AjouterEnleverPanier.decrementer}
                incrementer={AjouterEnleverPanier.incrementer}
                clearDepart={AjouterEnleverPanier.clearDepart}
            />
            <ProduitInfoPanier />
            <div className={styles.buttonGroup}>
                <button className={styles.button} onClick={() => handleQuantityChange(item.purchaseQuantity - 1)}>
                    -
                </button>
                <div className={styles.panierItemQuantite}>{item.purchaseQuantity}</div>
                <button className={styles.button} onClick={() => handleQuantityChange(item.purchaseQuantity + 1)}>
                    +
                </button>
            </div>
        </>
    );
}