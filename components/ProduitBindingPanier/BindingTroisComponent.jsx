import React, { useState } from 'react';
import ProduitItemDashBoardBouton from '/components/produit/ProduitItemDashBoardBouton';
import ProduitItemBtnAjouterPanier from '/components/produit/PanierItemBtnAjouterPanier';
import PanierPanneau from '@/pages/AchatsPanier/PanierPanneau';
import { useCart } from '/components/AchatPanier/UseCart';
import ProduitInfoPanier from '/components/AchatPanier/ProduitInfoPanier.jsx';
import styles from '/styles/AjouterEnleverPanier.module.css';


export default function BindingTroisComponent({
   
  }) {

    return (
      <>

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