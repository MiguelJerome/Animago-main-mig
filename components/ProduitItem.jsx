import Image from 'next/image';
import styles from '../styles/ProduitItem.module.css';
import logo from '../public/img/redbone.png'
import Link from 'next/link';
export default function ProductItem() {
    return (<> 
        <div className={styles.product}>
            <Link href="/">
                <Image src={logo} alt="logo" className={styles.img} />
                <p>Os Rouge</p>
            </Link>
            <div> 
            <div>  
                in stock
            </div>
                <span>price</span>
            </div>
            <button className={styles.button}>Ajputer au Panier</button>
        </div>
    </>
    );
}