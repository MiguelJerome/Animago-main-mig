import Image from 'next/image';
import styles from '../styles/Gallerie.module.css';

export default function Gallerie({ images }) {
const averageWidth = images.reduce((acc, image) => Math.max(acc, image.width), 0);
const averageHeight = images.reduce((acc, image) => Math.max(acc, image.height), 0);

return (
    <div className={styles.gallerie}>
    {images.map((imgData) => (
    <Image
        src={imgData.src}
        alt={imgData.alt}
        width={averageWidth}
        height={averageHeight}
        />
    ))}
    </div>
);
}