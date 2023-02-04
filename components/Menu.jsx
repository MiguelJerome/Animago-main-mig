//Importation des styles
import { useRouter } from 'next/router'
import Categorie from "./Categorie";
import styles from '../styles/Menu.module.css'
import Image from 'next/image';
import Logo from '../public/img/AnimagoLogo.png'

export default function Menu() {
    const router = useRouter()
    return (
        <div className={styles.menu}>
            <div>
                <div> <a onClick={() => router.push('/Accueil')}>
                <Image src={Logo} alt='lien pour Accueil' className={styles.imgLogo} />
                </a></div>
            </div>
            
        </div>
    )
}