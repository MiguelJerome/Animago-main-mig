import React, { useState, useEffect } from 'react';

export default function DimensionsMoyennesImages({ products, children }) {
  const [averageWidth, setAverageWidth] = useState(0);
  const [averageHeight, setAverageHeight] = useState(0);

  useEffect(() => {
    if (products) {
      setAverageWidth(Math.max(...products.map((p) => p.width), 0));
      setAverageHeight(Math.max(...products.map((p) => p.height), 0));
    }
  }, [products]);

  return children({ averageWidth, averageHeight });
}
