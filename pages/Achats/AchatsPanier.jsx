import { useCart, removeFromCart  } from '/components/AchatPanier/PanierLive.jsx';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Inter from '@next/font/google';
import Cart from '../../components/AchatPanier/Cart';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '/styles/Cart.module.css';
import produits from '/models/produits.jsx';
import { cart, initCart } from '/components/AchatPanier/PanierUpdate.jsx';
import Image from 'next/image';
import FermerPanier from '/public/img/FermerPanier.svg'
import CheckoutPanier from '/public/img/cart.png'
//import { calculateTotal } from '/components/AchatPanier/CalculePanier/PanierTotalItem.jsx';

export default function AchatsPanier() {
  const [cart, initCart,setCart] = useCart([]);
  const router = useRouter();
  
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);
  
  const toggleCart = useState(false);
  const [cartOpen, setCartOpen] = toggleCart;

  const closePanel = () => setIsOpen(false);
  const openPanel = () => setIsOpen(true);

  const handleChange = (item, value) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex((i) => i._id === item._id);
    const updatedItem = { ...updatedCart[itemIndex], purchaseQuantity: value };
    const newCart = [
      ...updatedCart.slice(0, itemIndex),
      updatedItem,
      ...updatedCart.slice(itemIndex + 1),
    ];
    setCart(newCart);
  };

  

  function calculateTotal() {
    let sum = 0;

    cart.forEach((item) => {
      sum += item.purchaseQuantity;
    });

    return sum.toFixed(0);
  }

  const calcTotal = () => {
    let sum = 0;
    for (const item of cart) {
      sum += item.price.toFixed(2) * item.purchaseQuantity.toFixed(2);
    }
    setTotal(sum.toFixed(2));
  };

  useEffect(() => {
    initCart();
    calcTotal();
  }, []);

  function submitCheckout() {
    const productIds = [];

    cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    // Replace this code with the actual logic for submitting checkout
    sendCheckoutData(productIds);
  }

  async function sendCheckoutData(productIds) {
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
  }

  return (
    <>
      <Header />
      <div
        className={`right-side-panel${isOpen ? " open" : ""}`}
        onClick={closePanel}
      >
        <div className="right-side-panel-content" onClick={(e) => e.stopPropagation()}>
          <div className={styles.cart}>
            <header className={styles.header}>
              <button className={`${styles.bouton} ${styles.close}`} onClick={() => router.back()}>
                <Image src={FermerPanier} alt="fermer panier" className={styles.panierFermer} />
              </button>
              <h2 className={styles.title}>Panier</h2>
            </header>
            <div className={styles.containerLayout}>
            <section className={styles.section}>
              
              {cart.length === 0 && (
                <h3>
                  <span role="img" aria-label="shocked">😱</span>
                  You haven't added anything to your cart yet!
                </h3>
              )}
             {cart.length > 0 && (
                <div>
                  <h3 className={styles.subTitle}>Articles dans votre panier:</h3>
                  <ul>
  {cart.map((item) => (
    <React.Fragment key={item._id}>
      <li>
        {item.name} - {item.purchaseQuantity} x ${item.price} = ${item.purchaseQuantity * item.price}
      </li>
      <li className={styles.produitDisponible}>
        <Image
          className={styles.imgCard}
          src={item.src}
          alt={item.alt}
          width={Number(item.averageWidth) || 100}
          height={Number(item.averageHeight) || 100}
          onClick={() => router.push(`/produit/${item.name}`)}
        />
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={(e) => handleChange(item, e.target.value)}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
            className={styles.imgCard}
          >
            🗑️
          </span>
        </div>
        {item.name} - ${item.price}
      </li>
    </React.Fragment>
  ))}
</ul>

                </div>
              )}
              <div className={styles.grandTotal}>
                <p>Grand Total: ${total}</p>
              </div>
              <div>
                <strong>Total item: {calculateTotal()}</strong>
                  <button className={styles.boutonCheckout} onClick={submitCheckout}>
                  <Image src={CheckoutPanier} alt="Checkout Panier" className={styles.imgCheckout} />
                </button>
                <span>(log in to check out)</span>
              </div>
              <h3 className={styles.subTitle}>Produits disponibles à l'achat :</h3>
              <ul>
              {produits.map((product) => (
                <li className={styles.produitDisponible} key={product._id}>
                  <Image
                    className={styles.imgCard}
                    src={product.src}
                    alt={product.alt}
                    width={Number(product.averageWidth) || 100}
                    height={Number(product.averageHeight) || 100}
                    onClick={() => router.push(`/produit/${product.name}`)}
                  />
                  {product.name} - ${product.price}
                </li>
              ))}
              </ul>
              </section>
              </div>
          </div>
        </div>
        <footer closePanel={closePanel} className={styles.footer}>
              <button className={styles.boutonVoirPanier} onClick={() => router.push("/Achats/Panier")}>
             Voir le panier
              </button>
            </footer>
      </div>
      <Footer />
    </>
  );
}
