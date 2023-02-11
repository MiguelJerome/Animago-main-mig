import { cart } from '/components/AchatPanier/PanierLive.jsx';

export function calculateTotal() {
  let sum = 0;

  cart.forEach((item) => {
    sum += item.purchaseQuantity;
  });

  return sum.toFixed(0);
}