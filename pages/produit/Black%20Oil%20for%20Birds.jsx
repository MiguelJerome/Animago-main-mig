import styles from '/styles/ProduitDescription.module.css';
import ProduitData from "/components/ProduitData.jsx";
import ProductDetails from "/components/ProduitDetails.jsx";

export default function Produit107() {
    const productId = 107;
    const product = ProduitData({categorie: null}).props.children.props.produits.find(({_id}) => _id === productId);

    return <>
        <div className={styles.container}>
            <ProductDetails product={product} />       
        </div>
    </>
}