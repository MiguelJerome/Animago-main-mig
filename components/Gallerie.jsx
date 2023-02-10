import { useRouter } from 'next/router'
import styles from '../styles/Gallerie.module.css'
import Image from 'next/image'

export default function Gallerie({ images }) {
  const router = useRouter();

  return (
    <>
      <div className={styles.gallerie}>
        {images.map((imageData, index) => (
          <div key={index} className={styles.container}>
            <Image
              src={imageData.src}
              alt={imageData.alt}
              width={imageData.width}
              height={imageData.height}
            />
            <p className={styles.text}>{imageData.categorie}</p>
            <button className={styles.button} onClick={() => router.push(imageData.page)}>Achetez maintenant</button>
          </div>
        ))}
      </div>
    </>
  );
}
