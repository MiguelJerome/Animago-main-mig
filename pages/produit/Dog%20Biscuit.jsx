import styles from '/styles/ProduitDescription.module.css';
import ProduitParCategorie from '/components/produit/filtration/ProduitParCategorie.jsx';
import ProductDetails from "/components/produit/ProduitDetails.jsx";

export default function Produit105() {
    const productId = 105;
    const product = ProduitParCategorie({categorie: null}).props.children.props.produits.find(({_id}) => _id === productId);

    return <>
        <div className={styles.container}>
            <ProductDetails product={product} />       
        </div>
    </>
}