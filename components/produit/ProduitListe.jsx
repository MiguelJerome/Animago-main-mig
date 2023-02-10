import styles from '/styles/ProduitListe.module.css';
import ProduitData from "./filtration/ProduitParCategorie";

export default function ProduitListe({ categorie }) {
    return (
    <>
        <div className={styles.container}>
                <ProduitData categorie={categorie} />
        </div>
    </>
    );
    }
