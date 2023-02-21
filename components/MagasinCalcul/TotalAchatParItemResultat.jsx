import React, { useEffect, useState } from 'react';

export default function TotalAchatParItemResultat({ cart }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      if (parseFloat(item.price) && parseFloat(item.purchaseQuantity)) {
        sum += parseFloat(item.price) * parseFloat(item.purchaseQuantity);
      }
    });
    setTotal(parseFloat(sum.toFixed(2)));
  }, [cart]);

  return total.toFixed(2);
}
