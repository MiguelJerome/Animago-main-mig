import { StoreProvider, useStoreContext } from "/utils/store.jsx";
import { useCart } from '/components/AchatPanier/UseCart.jsx';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Cart from '../../components/AchatPanier/Cart';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '/styles/Cart.module.css';
import produits from '/models/produits.jsx';
import Image from 'next/image';
import FermerPanier from '/public/img/FermerPanier.svg';
import CheckoutPanier from '/public/img/cart.png';
import { Produitsdisponibles } from '/components/AchatPanier/Produitsdisponibles';
import PanierVideMessage from '/components/AchatPanier/PanierVideMessage'

export default function AchatsPanier() {
  const [cart, initCart, setCart, removeFromCart] = useCart([]);
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
      const updatedItem = { ...updatedCart[itemIndex], purchaseQuantity: parseInt(value, 10)};
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
  }

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
  }

  return (
    <>
      <Header />
      <div className={`right-side-panel${isOpen ? " open" : ""}`} onClick={closePanel}>
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
                {cart.length === 0 ? (
                  <>
                    <PanierVideMessage />
                  </>
                ) : (
                  <>
                    <h3 className={styles.subTitle}>Articles dans votre panier:</h3>
                    <ul>
                      {cart.map((item) => (
                        <React.Fragment key={item._id}>
                          <li className={styles.produitDisponible}>
                            <Image
                              className={`${styles.imgCard} ${styles.img}`}
                              src={item.src}
                              alt={item.alt}
                              width={Number(item.averageWidth) || 100}
                              height={Number(item.averageHeight) || 100}
                              onClick={() => router.push(`/produit/${item.name}`)}
                            />
                            <div>
                              <div className={styles.cartFormWragpe}>
                                <p className={styles.productInfo}>{item.name}</p>
                                <p className={styles.productInfo}>${item.price}</p>
                              </div>
                              <span>Qty:</span>
                              <input
                                className={styles.input}
                                type="number"
                                placeholder="1"
                                value={item.purchaseQuantity}
                                onChange={(e) => handleChange(item, parseInt(e.target.value))}
                              />
                              <span role="img" aria-label="trash" onClick={() => removeFromCart(item)} className={styles.imgCard}>🗑️</span>
                            </div>
                          </li>
                          <li className={styles.itemTotal}>
                            {item.name} - {parseInt(item.purchaseQuantity, 10)} x ${parseFloat(item.price).toFixed(2)} = $
                            {(parseInt(item.purchaseQuantity, 10) * parseFloat(item.price)).toFixed(2)}
                          </li>
                        </React.Fragment>
                      ))}
                    </ul>
                    <div className={styles.grandTotal}>
                      <strong>Grand Total: ${parseFloat(total).toFixed(2)}</strong>
                    </div>
                    <div>
                      <strong>Total item: {calculateTotal()}</strong>
                      <button className={styles.boutonCheckout} onClick={submitCheckout}>
                        <Image src={CheckoutPanier} alt="Checkout Panier" className={styles.imgCheckout} />
                      </button>
                      <span>(log in to check out)</span>
                    </div>
                  </>
                )}
                <Produitsdisponibles produits={produits} />
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