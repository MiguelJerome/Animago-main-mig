import { useState, useEffect } from 'react';

export const useAverageImageDimensions = (produits) => {
  const [averageWidth, setAverageWidth] = useState(0);
  const [averageHeight, setAverageHeight] = useState(0);

  useEffect(() => {
    setAverageWidth(produits.reduce((max, { width }) => Math.max(max, width), 0));
    setAverageHeight(produits.reduce((max, { height }) => Math.max(max, height), 0));
  }, [produits]);

  return { averageWidth, averageHeight };
};