import styles from '/styles/ProduitDescription.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router'

export default function ProduitDetails({ product, productDescription }) {
    const router = useRouter();
    const politiqueDescription = `Les clients peuvent engager une procédure de retour dans les 7 jours à compter de la date de réception. Si le client souhaite retourner ses achats, il est en droit de le faire sans nécessairement apporter de justification. Le site marchand ne peut le refuser.`;
    const expeditionDescription = `Si nous connaissons un volume élevé de commandes, les expéditions peuvent être retardées de quelques jours. S'il vous plaît
    prévoir des jours supplémentaires en transit pour la livraison. S'il y a un retard important dans l'expédition de votre
    commande, nous vous contacterons par e-mail ou par téléphone.`;
    return (<>
        <main>
            <div className={styles.container} >
                <h1 className={styles.title}>{product.name}</h1>
                <div className={styles.containerDetail}>
                    <div className={styles.produitWrapper} >
                        <Image src={product.src} alt={product.alt} width={product.width} height={product.height} />
                        <p className={styles.p}>Produit#: {product._id}</p>
                        <p className={styles.p}>Categorie: {product.categorie}</p>
                        <p className={styles.p}>Item en Stock: {product.stock}</p>
                        <p className={styles.p}>Prix: C${product.price}</p>
                        <div className={styles.containerCartButton} >
                            <button className={styles.button}>Enlever du panier</button> <button className={styles.button}>Ajouter au panier</button>
                        </div>
                        <button className={styles.button} onClick={() => router.back()}>← Retour aux produits</button>
                    </div>
                    <div className={styles.produitWrapper}>
                        <p className={styles.subtitle}>INFORMATION SUR LE PRODUIT</p>
                        <p className={styles.description}>{product.description}</p>
                        <p className={styles.subtitle}>POLITIQUE DE RETOUR ET DE REMBOURSEMENT</p>
                        <p className={styles.description}>{politiqueDescription}</p>
                        <p className={styles.subtitle}>INFORMATIONS D'EXPÉDITION</p>
                        <p className={styles.description}>{expeditionDescription}</p>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}