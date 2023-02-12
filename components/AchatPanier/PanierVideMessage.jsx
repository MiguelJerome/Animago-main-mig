import styles from '/styles/Cart.module.css';

export default function PanierVideMessage() {
  return (
    <h3>
      <span className={styles.shocked} role="img" aria-label="shocked">😱</span>
      <p>Vous n'avez encore rien ajouté à votre panier !</p>
    </h3>
  );
};