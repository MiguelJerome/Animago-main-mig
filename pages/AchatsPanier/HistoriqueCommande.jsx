import React from 'react';
import { Inter } from '@next/font/google';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useCart } from '/components/AchatPanier/UseCart.jsx';
import OrderHistory from '/components/CommandeHIstorique/CommandeHIstorique.jsx';

import styles from '/styles/Cart.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function HistoriqueCommande({ purchaseDate, orders }) {
  let cart = [];

  if (typeof orders === 'string') {
    try {
      cart = JSON.parse(orders);
    } catch (error) {
      console.error('Error parsing orders:', error);
    }
  }

  return (
    <>
      <Header />
      <OrderHistory cart={cart} purchaseDate={purchaseDate} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { orders } = context.query;
  const currentDate = new Date().toLocaleDateString();

  // If the orders parameter is present in the query string, parse it from a string back into an array.
  const ordersArray = orders ? JSON.parse(orders) : [];

  return {
    props: {
      purchaseDate: currentDate,
      orders: ordersArray || [],
    },
  };
}
