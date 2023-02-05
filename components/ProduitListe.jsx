import ProduitItem from '../components/ProduitItem';
import styles from '../styles/ProduitListe.module.css';

export default function ProduitListe() {
    return (<>
        
        <div className={styles.superContainer}>
            <div className={styles.container}>
                <ProduitItem />
            </div>
        </div>
    </>
    );
    }
