import { Inter } from '@next/font/google'
import styles from '../styles/NotFound.module.css'
import { useRouter } from 'next/router'

export default function NotFound() {
    const router = useRouter()
    return <>
     <main>
        <div className={styles.container}>
            <h1 className={styles.h1} >404 Page non trouvée</h1>
            <h1 className={styles.emoji} role="img" aria-label="Face With Rolling Eyes Emoji">🙄</h1>
        </div>
        <div className={styles.container}>
                    <button className={`${styles.button} ${styles.h1}`} onClick={() => router.push('/Accueil')}><h1>← Aller a Accueil</h1></button>
        </div>
     </main>
    </>
  }