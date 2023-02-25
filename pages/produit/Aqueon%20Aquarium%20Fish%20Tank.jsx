import styles from '/styles/ProduitDescription.module.css';
import ProduitParCategorie from '/components/produit/filtration/ProduitParCategorie.jsx';
import ProductDetails from "/components/produit/ProduitDetails.jsx";

export default function Produit115() {
    const productId = 115;
    const products = ProduitParCategorie({categorie: null});
    const product = Array.isArray(products) ? product.find(({_id}) => _id === productId) : null;
    
        return <>
            <div className={styles.container}>
                <ProductDetails product={product|| products} />    
            </div>
        </>
}