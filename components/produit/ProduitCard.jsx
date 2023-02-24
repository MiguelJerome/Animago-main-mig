import { useRouter } from 'next/router';
import styles from '/styles/ProduitCard.module.css';
import React from 'react';
import { useCart } from '/components/AchatPanier/UseCart';
import DimensionsMoyennesImages from '/components/Images/DimensionsMoyennesImages.jsx';
import ProduitItem from "/components/produit/ProduitItem.jsx";
import UpdateProductStockAndSetCart from "/components/ProduitBindingPanier/UpdateProductStockAndSetCart/UpdateProductStockAndSetCart"

export default function ProduitCard({showPanierPanneau, toggler, produits }) {
  const router = useRouter();
  const [, addToCart] = useCart();
  const { produitsState, setProduits, updateProductStockAndSetCart } = UpdateProductStockAndSetCart({ produits });

  return (
    <div className={styles.gallerie}>
      <DimensionsMoyennesImages produits={produitsState}>
        {({ averageWidth, averageHeight }) => (
          <>
            {produitsState.map((product) => (
              <ProduitItem
                key={product._id}
                product={product}
                averageWidth={averageWidth}
                averageHeight={averageHeight}
                router={router}
                addToCart={addToCart}
                updateProductStockAndSetCart={updateProductStockAndSetCart}              
                toggler={toggler}
                showPanierPanneau={showPanierPanneau}
              />
            ))}
          </>
        )}
      </DimensionsMoyennesImages>
    </div>
  );
}
