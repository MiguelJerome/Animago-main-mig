import { useRouter } from 'next/router'
import styles from '../styles/Categorie.module.css'

export default function Categorie(props) {
    const router = useRouter()
    return( <>
            
            <div className={styles.menuCategorie}>
                <h2 className={styles.h2Categorie} >Choisissez une catégorie:</h2>
                <div className={styles.menuCategorieList} onClick={() => router.push('/toutMagasiner')}>TOUT MAGASINER</div>
                <div className={styles.menuCategorieList} onClick={() => router.push('/chien')}>CHIENS</div>
                <div className={styles.menuCategorieList} onClick={() => router.push('/chat')}>CHATS</div>
                <div className={styles.menuCategorieList} onClick={() => router.push('/oiseau')}>OISEAUX</div>
                <div className={styles.menuCategorieList} onClick={() => router.push('/aquatique')}>AQUATIQUE</div>
                <div className={styles.menuCategorieList} onClick={() => router.push('/petitanimaux')}>PETIT ANIMAUX</div>
                <div className={styles.menuCategorieList} onClick={() => router.push('/reptile')}>REPTILES</div>
            </div>
        </>
    );
}