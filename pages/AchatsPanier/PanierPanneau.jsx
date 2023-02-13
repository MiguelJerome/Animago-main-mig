import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '/styles/Cart.module.css';
import produits from '/models/produits.jsx';
import { Produitsdisponibles } from '/components/AchatPanier/Produitsdisponibles';
import PanierPanneauFooter from '/components/AchatPanier/PanierPanneauDroit/PanierPanneauFooter';
import PanierPanneauHeader from '/components/AchatPanier/PanierPanneauDroit/PanierPanneauHeader';
import ContenuPanneauPanier from '/components/AchatPanier/PanierPanneauDroit/ContenuPanneauPanier';
import { useCart } from '/components/AchatPanier/UseCart.jsx';

export default function PanierPanneau() {
  const [cart, initCart, addToCart, removeFromCart, setCart] = useCart();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    initCart();
  }, []);

  useEffect(() => {
    calcTotal();
  }, [cart]);

  const closePanel = () => setIsOpen(false);
  const openPanel = () => setIsOpen(true);

  const handleChange = (item, value) => {
    if (Number.isInteger(value)) {
      const updatedCart = [...cart];
      const itemIndex = updatedCart.findIndex((i) => i._id === item._id);
      const stock = updatedCart[itemIndex].stock;
      const updatedItem = {
        ...updatedCart[itemIndex],
        purchaseQuantity: value >= 0 ? Math.min(parseInt(value, 10), stock) : 0
      };
      const newCart = [
        ...updatedCart.slice(0, itemIndex),
        updatedItem,
        ...updatedCart.slice(itemIndex + 1),
      ];
      setCart(newCart);
    }
  };
  
  const calculateTotal = () => {
    let sum = 0;
    cart.forEach((item) => {
      sum += parseInt(item.purchaseQuantity);
    });
    return sum.toFixed(0);
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
    const productIds = [];
    cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });
    try {
      const response = await fetch('/Checkout/Checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productIds })
      });
      const data = await response.json();
      if (data.success) {
        alert('Checkout successful!');
        setCart([]);
        router.push('/');
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during checkout');
    }
  };

  return (
    <>
      <Header />
      <div className={`right-side-panel${isOpen ? " open" : ""}`} onClick={closePanel}>
        <div className="right-side-panel-content" onClick={(e) => e.stopPropagation()}>
          <div className={styles.cart}>
            <PanierPanneauHeader router={router} />
            <div className={styles.containerLayout}>
              <section className={styles.section}>
                <ContenuPanneauPanier
                  cart={cart}
                  handleChange={handleChange}
                  removeFromCart={removeFromCart}
                  router={router}
                  calculateTotal={calculateTotal}
                  total={total}
                  submitCheckout={submitCheckout}
                  addToCart={addToCart}
                />
                <Produitsdisponibles produits={produits} />
              </section>
            </div>
          </div>
        </div>
        <PanierPanneauFooter closePanel={closePanel} router={router} />
      </div>
      <Footer />
    </>
  );
}  