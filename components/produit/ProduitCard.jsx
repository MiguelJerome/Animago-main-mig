import { useRouter } from 'next/router'
import Image from 'next/image';
import styles from '/styles/ProduitCard.module.css';
import React, { useState } from 'react';
import AjouterEnleverPanier from "./AjouterEnleverPanier.jsx";
import ProduitCardInfo from '/components/produit/ProduitCardInfo.jsx'
import EffacerBoutonPanier from '/components/produit/Items/EffacerBoutonPanier';


export default function ProduitCard({ produits }) {
  const [cart, setCart] = useState([]);
  const [produitsState, setProduits] = useState(produits);
  const [quantite, setQuantite] = useState(0);

  const handleAddToCart = (_id, stock, ) => {
    if (stock > 0) {
      setCart((prevCart) => [...prevCart, { _id, stock: stock - 1 }]);

      // Find the index of the product in the produits array
      const productIndex = produitsState.findIndex((product) => product._id === _id);

      // Update the stock of the product
      const updatedProduct = {...produitsState[productIndex], stock: stock - 1};
      const updatedProduits = [...produitsState.slice(0, productIndex), updatedProduct, ...produitsState.slice(productIndex + 1)];
      setProduits(updatedProduits);

      // Reset the quantity to 0
      setQuantite(0);
    }
};

  const [averageWidth, setAverageWidth] = useState(0);
  const [averageHeight, setAverageHeight] = useState(0);

  React.useEffect(() => {
    setAverageWidth(produits.reduce((max, { width }) => Math.max(max, width), 0));
    setAverageHeight(produits.reduce((max, { height }) => Math.max(max, height), 0));
  }, [produits]);

  const router = useRouter()

  const clearDepart = () => {
    setQuantite(0);
  };

  return (
    <>
    <div className={styles.gallerie}>
      {produitsState.map(({ _id, src, alt, name, price, stock }) => (
        <div key={_id} className={styles.imageContainer}>
          <Image className={styles.imgCard}
              src={src}
              alt={alt}
              width={Number(averageWidth) || 400}
              height={Number(averageHeight) || 400}
            onClick={() => router.push(`/produit/${name}`)}
          />
            <div className={styles.imageInfo}>
            <p className={styles.imageId}>Produit</p>
            <p className={styles.imageId}>#{_id}</p>
            <p className={styles.imageName}>{name}</p>
            <p className={styles.imagePrice}>C${price}</p>
            <p className={styles.imageStock}><span className={styles.stock} >{stock}</span> items en stock</p>
            <div className={styles.dashBoardButton}>
            <AjouterEnleverPanier
              stock={stock}
              depart={quantite}
              produits={produits}
              onAddToCart={() => handleAddToCart(_id, stock)}
              onClearDepart={clearDepart}
            />
            <button className={styles.button} onClick={() => handleAddToCart(_id, stock)}>
              Ajouter au Panier
              </button>
              </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};