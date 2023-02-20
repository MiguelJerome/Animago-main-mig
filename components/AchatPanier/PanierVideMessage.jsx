import styles from '/styles/Cart.module.css';
import Image from 'next/image';
import Spinner from '/public/img/spinner.gif'

export default function PanierVideMessage({ time }) {
    return (
        <>
        <h3 className={styles.emptyCartMessage}>
            <span className={styles.shocked} role="img" aria-label="shocked">😱</span>
                <p>Vous n'avez encore rien ajouté à votre panier!</p>
                <p>Votre panier est vide.</p>
                <p>La page se rechargera dans {time / 1000} secondes.</p>
                
            </h3>
            <Image
                    src={Spinner}
                    className={styles.imgSpinner}
                    alt={'Attente commande mise a jour' || 'Default Image'}
                    priority={true}
                />
        </>
    )
};