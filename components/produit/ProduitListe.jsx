import styles from '/styles/ProduitListe.module.css';
import ProduitParCategorie from "./filtration/ProduitParCategorie";

export default function ProduitListe({ categorie }) {
  return (
    <div className={styles.container}>
      <ProduitParCategorie categorie={categorie} />
    </div>
  );
}