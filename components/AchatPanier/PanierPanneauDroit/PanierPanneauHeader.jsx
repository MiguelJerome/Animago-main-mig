import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from '/styles/Cart.module.css';
import CloseIcon from '/public/img/FermerPanier.svg';

function PanierPanneauHeader({ router }) {
  const handleGoBackClick = () => {
    router.back();
  };

  return (
    <header className={styles.header}>
      <button className={`${styles.bouton} ${styles.close}`} onClick={handleGoBackClick}>
        <Image src={CloseIcon} alt={"fermer panier" || 'Default Image'} className={styles.closeIcon} />
      </button>
      <h2 className={styles.title}>Panier</h2>
    </header>
  );
}

PanierPanneauHeader.propTypes = {
  router: PropTypes.object.isRequired,
};

export default PanierPanneauHeader;