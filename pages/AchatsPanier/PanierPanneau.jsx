import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '/components/AchatPanier/UseCart.jsx';
import MainTouteComponentPanier from '/components/AchatPanier/PanierPanneauDroit/MainTouteComponentPanier';
import styles from '/styles/Header.module.css';

export default function PanierPanneau({ toggler }) {
  const [cart, initCart, addToCart, removeFromCart, setCart] = useCart();
  const router = useRouter();
  const [total, setTotal] = useState(0);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    initCart();
  }, []);

  useEffect(() => {
    calcTotal();
  }, [cart]);

  useEffect(() => {
    if (orders.length > 0) {
      alert(`Merci d'avoir acheté avec Animago ! Voici le grand total de votre commande $${total}`);
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
  
  const calcTotal = () => {
    let sum = 0;
    cart.forEach((item) => {
      if (parseFloat(item.price) && parseFloat(item.purchaseQuantity)) {
        sum += parseFloat(item.price) * parseFloat(item.purchaseQuantity);
      }
    });
    setTotal(parseFloat(sum.toFixed(2)));
  };

  const submitCheckout = async () => {
    if (total === 0) {
      alert("Votre panier est vide, vous ne pouvez pas effectuer de commande.");
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
        total={total}
        />
        </div>
      </>
  
  );
}
