import { useRouter } from 'next/router'
import Image from 'next/image';
import styles from '../styles/ProduitCard.module.css';
import React, { useState, useEffect } from 'react';
import AjouterEnleverPanier from "./AjouterEnleverPanier.jsx";
//import { useStoreContext } from "../utils/GlobalState.jsx";


export default function Gallerie({ produits }) {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (_id, stock) => {
    if (stock > 0) {
      setCart((prevCart) => [...prevCart, { _id, stock: stock - 1 }]);
    }
  };
  
const [averageWidth, setAverageWidth] = useState(0);
const [averageHeight, setAverageHeight] = useState(0);

useEffect(() => {
setAverageWidth(produits.reduce((max, { width }) => Math.max(max, width), 0));
setAverageHeight(produits.reduce((max, { height }) => Math.max(max, height), 0));
}, [produits]);

  const router = useRouter()

//  const [state, dispatch] = useStoreContext();
  /*
  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }
*/
  
  return (<>
    
  <div className={styles.gallerie}>
    {produits.map(({ _id, src, alt, name, price, stock }) => (
      <div key={_id} className={styles.imageContainer}>   
        <Image className={styles.imgCard}
            src={src}
            alt={alt}
            width={averageWidth}
          height={averageHeight} 
          onClick={() => router.push(`/produit/${name}`)}
        />
          <div className={styles.imageInfo}>
          <p className={styles.imageId}>Produit</p>
          <p className={styles.imageId}>#{_id}</p>
          <p className={styles.imageName}>{name}</p>
          <p className={styles.imagePrice}>C${price}</p>
          <p className={styles.imageStock}>{stock} items en stock</p>
          <AjouterEnleverPanier stock={stock} depart={0} onAddToCart={() => handleAddToCart(_id, stock)} />
            <button
                className={styles.button}
                onClick={() => handleAddToCart(_id, stock)}
              >
                Ajouter au Panier
              </button>
        </div>
      </div>
    ))}
    </div>
    </>
);
}