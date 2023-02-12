import { Inter } from '@next/font/google'
import styles from '/styles/NotFound.module.css'

export default function PanierPleinEcranContenu() {
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.h1}>Vous n'avez encore rien ajouté à votre panier!</h1>
        <h1 className={styles.emoji} role="img" aria-label="shocked"> 😱</h1>
      </div>
    </main>
  );
}
  