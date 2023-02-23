import React, { useState } from 'react';
import ProduitItemDashBoardBouton from '/components/produit/ProduitItemDashBoardBouton';
import ProduitItemBtnAjouterPanier from '/components/produit/PanierItemBtnAjouterPanier';
import PanierPanneau from '@/pages/AchatsPanier/PanierPanneau';
import { useCart } from '/components/AchatPanier/UseCart';
import ProduitInfoPanier from '/components/AchatPanier/ProduitInfoPanier.jsx';
import styles from '/styles/AjouterEnleverPanier.module.css';


export default function BindingTroisComponent({
    handleQuantityChange,
    showPanierPanneau,
    handleAddToCart,
    item,
    onQuantityChange,
    quantiteProp,
    decrementer,
    incrementer
  }) {
    const [toggler, setToggler] = useState(false);
    const { name = '', description = '', stock = 0 } = item ?? {};
    const [, addToCart, cart, setCart] = useCart([]);
    const [quantite, setQuantite] = useState(quantiteProp);
  
    const handleAddToCartClick = () => {
      handleAddToCart({ _id: item._id, stock }, quantite);
      clearDepart(stock);
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
        const newCart = [
          ...updatedCart.slice(0, itemIndex),
          updatedItem,
          ...updatedCart.slice(itemIndex + 1),
        ];
        setCart(newCart);
      }
    };
  
    const clearDepart = (newDepart) => {
      const updatedProduct = { ...item, stock: newDepart };
      setCart((prevCart) => {
        const cartWithoutItem = prevCart.filter((p) => p._id !== item._id);
        if (newDepart > 0) {
          return [...cartWithoutItem, updatedProduct];
        } else {
          return cartWithoutItem;
        }
      });
      setQuantite(0);
      setQuantite(newDepart);
    };
  
    return (
      <>
        <div>
          <PanierPanneau toggler={toggler} />
          <ProduitInfoPanier />
          <div className={styles.buttonGroup}>
            <button className={styles.button} onClick={decrementer}>
              -
            </button>
            <div className={styles.panierItemQuantite}>{quantite}</div>
            <button className={styles.button} onClick={incrementer}>
              +
            </button>
          </div>
          <ProduitItemBtnAjouterPanier
            showPanierPanneau={showPanierPanneau}
            toggler={toggler}
            handleAddToCartClick={handleAddToCartClick}
            quantite={quantite}
          />
          <button className={styles.buttonClear} onClick={() => clearDepart(0)}>Clear</button>
        </div>
  
        <div className={`${styles.container} ${styles.containerInfo}`}>
          <h5>Input panier</h5>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.description}>{description}</p>
          <ProduitInfoPanier />
          <div className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="quantity">
                Quantité
              </label>
        <div className={styles.inputGroup}>
          <button className={styles.btn} onClick={decrementer}>-</button>
          <input
            className={styles.input}
            type="number"
            id="quantity"
            name="quantity"
            value={quantite}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
          />
          <button className={styles.btn} onClick={incrementer}>+</button>
        </div>
      </div>
      <button className={styles.btnAdd} onClick={handleAddToCartClick}>
        Ajouter au panier
      </button>
    </div>
    <ProduitItemDashBoardBouton
                  stock={stock}
                  depart={item?.depart}
                  product={item}
                  addToCart={addToCart}
                  handleAddToCart={handleAddToCart}
                  handleQuantityChange={handleQuantityChange}
                  clearDepart={clearDepart}
                  onQuantityChange={onQuantityChange}
                  quantite={quantite}
                  decrementer={decrementer}
                  incrementer={incrementer}
    />
  </div>
</>
    );
}  
        export async function getServerSideProps(context) {
            /*
            const props = {
              components: {
                InputPanier,
                ProduitInfoPanier,
                ProduitItemDashBoardBouton,
              },
            };
            */
            const props = {
              components: {
                ProduitInfoPanier,
              },
            };
            return {
              props,
            };
          }