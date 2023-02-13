import React from 'react';
import PropTypes from 'prop-types';
import styles from '/styles/Cart.module.css';

const PanierPanneauFooter = ({ closePanel, router }) => {
  const handleViewCartClick = () => {
    router.push('/AchatsPanier/PanierPleinEcran');
  };

  return (
    <footer className={styles.footer}>
      <button className={styles.boutonVoirPanier} onClick={handleViewCartClick}>
        Voir le panier
      </button>
    </footer>
  );
};

PanierPanneauFooter.propTypes = {
  closePanel: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
};

export default PanierPanneauFooter;