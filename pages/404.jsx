import { Inter } from '@next/font/google'
import styles from '../styles/NotFound.module.css'

export default function NotFound() {
    return <>
     <main>
        <div className={styles.container}>
            <h1 className={styles.h1} >404 Page Not Found</h1>
            <h1 className={styles.emoji} role="img" aria-label="Face With Rolling Eyes Emoji">🙄</h1>
        </div>
     </main>
    </>
  }