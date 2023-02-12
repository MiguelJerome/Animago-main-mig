import React from 'react';
import styles from '/styles/Cart.module.css';

const PanierPanneauFooter = ({ closePanel, router }) => {
  return (
    <footer closePanel={closePanel} className={styles.footer}>
      <button className={styles.boutonVoirPanier} onClick={() => router.push("/Achats/Panier")}>
        Voir le panier
      </button>
    </footer>
  );
};

export default PanierPanneauFooter;