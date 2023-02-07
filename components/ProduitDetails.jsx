import styles from '/styles/ProduitDescription.module.css';
import Image from 'next/image';

export default function ProduitDetails({product}) {
    return <main>
        <div className={styles.container} >
            <h1 className={styles.title}>{product.name}</h1>
            <Image src={product.src} alt={product.alt} width={product.width} height={product.height} />
            <p className={styles.p}>Produit#: {product._id }</p>  
            <p className={styles.p}>Categorie: {product.categorie}</p>
            <p className={styles.p}>Item en Stock: {product.stock}</p>
            <p className={styles.p}>Prix: {product.price}</p>
        </div>
    </main>
}