import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '/components/AchatPanier/UseCart.jsx';
import MainTouteComponentPanier from '/components/AchatPanier/PanierPanneauDroit/MainTouteComponentPanier';
import styles from '/styles/Header.module.css';
import UpdateProductStockAndSetCart from '/components/ProduitBindingPanier/UpdateProductStockAndSetCart/UpdateProductStockAndSetCart';
import GetterSetterTotalPriceInCart from '/components/ProduitBindingPanier/GetterSetterTotalPriceInCart/GetterSetterTotalPriceInCart';

export default function PanierPanneau({ toggler  }) {
  const [cart, initCart, addToCart, removeFromCart, setCart] = useCart();
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [totalPriceInCart, setTotalPriceInCart] = useState(0);

  useEffect(() => {
    initCart();
  }, []);

  useEffect(() => {
    calcTotal();
  }, [cart]);

  useEffect(() => {
    if (orders.length > 0) {
      alert(`${
      `      Merci d'avoir acheté chez Animago ! Nous apprécions votre confiance en nos produits et services.
      Votre commande a bien été prise en compte et le montant total de votre achat est de $${totalPriceInCart}.
      Nous espérons que vous êtes satisfait de votre achat et nous espérons vous revoir bientôt chez Animago pour de nouveaux achats.`
      }`);
      setCart([]);
      setOrders([]);
      router.push({
        pathname: '/AchatsPanier/HistoriqueCommande',
        query: { orders: JSON.stringify(orders) },
      });
    }
  }, [orders]);

  const handleChange = (item, value) => {
    if (Number.isInteger(value)) {
      const updatedCart = [...cart];
      const itemIndex = updatedCart.findIndex((i) => i._id === item._id);
      if (itemIndex !== -1) {
        const stock = updatedCart[itemIndex].stock;
        const updatedItem = {
          ...updatedCart[itemIndex],
          purchaseQuantity: value >= 0 ? Math.min(parseInt(value, 10), updatedCart[itemIndex]?.stock || 0) : 0,
        };
        const newCart = [
          ...updatedCart.slice(0, itemIndex),
          updatedItem,
          ...updatedCart.slice(itemIndex + 1),
        ];
        setCart(newCart);
      }
    }
  };


/*
const handleChange = (item, value) => {
  if (Number.isInteger(value)) {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex((i) => i._id === item._id);
    if (itemIndex !== -1) {
      const initialStock = parseInt(item.stock);
      const purchaseQuantity = Number.isInteger(value) >= 0  ? Math.min(parseInt(value, 10), parseInt(initialStock)) : 0;
      const diff = parseInt(purchaseQuantity) - parseInt(item.purchaseQuantity);
      const updatedItem = {
        ...item,
        purchaseQuantity,
        stock: parseInt(initialStock) - parseInt(diff),
      };
      const newCart = [
        ...updatedCart.slice(0, itemIndex),
        updatedItem,
        ...updatedCart.slice(itemIndex + 1),
      ];
      setCart(newCart);
    }
  }
};
*/

  const calcTotal = () => {
    let sum = 0;
    cart.forEach((item) => {
      if (parseFloat(item.price) && parseFloat(item.purchaseQuantity)) {
        sum += parseFloat(item.price) * parseFloat(item.purchaseQuantity);
      }
    });
    setTotalPriceInCart(parseFloat(sum.toFixed(2)));
  };

  const submitCheckout = async () => {
    if (totalPriceInCart <= 0) {
      alert("Votre panier est actuellement vide. Pour pouvoir effectuer une commande, veuillez ajouter des produits à votre panier.");
      return;
    }
  
    const productIds = [];
    cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });
    setOrders([...orders, cart]);
  };
  
  return (
    <>
      <div className={`${styles.rightPanel} ${toggler ? 'active' : ''}`}>
      <MainTouteComponentPanier
        cart={cart}
        handleChange={handleChange}
        removeFromCart={removeFromCart}
        router={router}
        submitCheckout={submitCheckout}
        addToCart={addToCart}
        toggler={toggler}
        />
        </div>
      </>
  
  );
}


export async function getServerSideProps(context) {
  const { carts } = context.query;

  // If the orders parameter is present in the query string, parse it from a string back into an array.
  const cartsArray = carts ? JSON.parse(carts) : [];

  return {
    props: {
      carts: cartsArray || [],
    },
  };
}