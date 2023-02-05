import Image from 'next/image';
import styles from '../styles/Gallerie.module.css';
import React, { useState, useEffect } from 'react';


export default function Gallerie({ images }) {
  const [averageWidth, setAverageWidth] = useState(0);
  const [averageHeight, setAverageHeight] = useState(0);

    useEffect(() => {
    setAverageWidth(images.reduce((acc, image) => Math.max(acc, image.width), 0));
    setAverageHeight(images.reduce((acc, image) => Math.max(acc, image.height), 0));
  }, [images]);

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
