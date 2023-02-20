import React from 'react';

export default function TotalAchatQuantite({ cart }) {
  let sum = 0;
  cart.forEach((item) => {
    sum += parseInt(item.purchaseQuantity);
  });
  return <>{sum.toFixed(0)}</>;
}

