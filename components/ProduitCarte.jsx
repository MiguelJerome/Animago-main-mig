import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ProduitCarte.module.css';
import logo from '../public/img/produits/redbone.png'

export default function ProduitCarte(images) {
  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <Link href="/">
          <Image src={logo} alt="logo" className={styles.img} />
          <p>Os Rouge</p>
        </Link>
        <div>
          <div>in stock</div>
          <span>$price</span>
        </div>
        <button className={styles.button}>Ajouter au Panier</button>
      </div>
    </div>
  );
}
