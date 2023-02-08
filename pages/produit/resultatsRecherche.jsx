import styles from '/styles/ProduitDescription.module.css';
import ProduitData from "/components/ProduitData.jsx";
import ProductDetails from "/components/ProduitDetails.jsx";
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Categorie from '/components/Categorie';
import Header from '/components/Header';
import Footer from '/components/Footer';

export default function ResultatRecherche() {
    const url = "http://localhost:3000/produit/resultatsRecherche?productName=Aquarium%20Coral%20Fish%20Tank";
const productName = new URL(url).searchParams.get("productName");
   
    const product = ProduitData({categorie: null}).props.children.props.produits.find(({name}) => name === productName);

    return <>
        <Header/>
      <Categorie />
        <main>
            <div className={styles.container}>  
            <ProductDetails product={product} />         
            </div>
            </main>
      <Footer/>
    </>
}

ResultatRecherche.getInitialProps = async ({ query: { url } }) => {
    return { url };
  };