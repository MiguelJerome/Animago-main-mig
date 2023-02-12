import { useCart } from '/components/AchatPanier/PanierLive.jsx';

export default function useClearDepart(product, quantity) {
  const [cart, addToCart] = useCart();

  const clearDepart = () => {
    addToCart(product, -quantity);
  };

  return [clearDepart];
}
