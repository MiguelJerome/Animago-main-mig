//Importation des styles
import styles from '../styles/Menu.module.css'

export default function Menu() {
    return <div className={styles.menu}>
        <div>
            <div>Logo Ici</div>
        </div>
        
        <div className={styles.menuProduct}>
            <div className={styles.menuProductList}>TOUT MAGASINER</div>
            <div className={styles.menuProductList}>CHIENS</div>
            <div className={styles.menuProductList}>CHATS</div>
            <div className={styles.menuProductList}>OISEAUX</div>
            <div className={styles.menuProductList}>AQUATIQUE</div>
            <div className={styles.menuProductList}>PETIT ANIMAUX</div>
            <div className={styles.menuProductList}>PLUS</div>
        </div>
        <div className={styles.menuLogo}>
            <div className={styles.menuProductList}>Login ICI</div>
            <div className={styles.menuProductList}>Panier ICI</div>
        </div>

    </div>
}