import styles from '/styles/ProduitDescription.module.css';
import ProduitParID from '/components/produit/filtration/ProduitParID'

export default function Produit108() {

  return (
    <div className={styles.container}>
      <ProduitParID productId={108} />
    </div>
  );
}