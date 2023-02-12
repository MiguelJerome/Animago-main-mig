import { useCart } from '/components/AchatPanier/UseCart.jsx';

export default function useClearDepart(product, quantity) {
  const [cart, addToCart] = useCart();

  const clearDepart = () => {
    addToCart(product, -quantity);
  };

  return [clearDepart];
}
