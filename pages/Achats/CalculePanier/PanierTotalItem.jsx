import { cart } from '/components/AchatPanier/UseCart.jsx';

export function calculateTotal() {
  let sum = 0;

  cart.forEach((item) => {
    sum += item.purchaseQuantity;
  });

  return sum.toFixed(0);
}