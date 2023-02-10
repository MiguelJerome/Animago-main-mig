import styles from '/styles/ProduitDescription.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router'
import politiqueDescription from '/components/produit/Description/politiqueDesc.jsx';
import expeditionDescription  from '/components/produit/Description/expedition.jsx';

export default function ProduitDetails({ product }) {
    const router = useRouter();
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