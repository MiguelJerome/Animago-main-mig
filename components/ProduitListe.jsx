import styles from '../styles/ProduitListe.module.css';
import ProduitData from "./ProduitData";

export default function ProduitListe({ categorie }) {
    return (
    <>
        <div className={styles.container}>
                <ProduitData categorie={categorie} />
        </div>
    </>
    );
    }
