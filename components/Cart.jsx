import React, { useEffect } from 'react';
import styles from '../styles/Cart.module.css'
//import { loadStripe } from '@stripe/stripe-js';
//import { useLazyQuery } from '@apollo/client';
//import { QUERY_CHECKOUT } from '../../utils/queries';
//import { idbPromise } from '../../utils/helpers';
//import CartItem from '../CartItem';
//import Auth from '../../utils/auth';
//import { useStoreContext } from '../../utils/GlobalState';
//import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
//import './style.css';

//const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

export default function Cart() {

  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.h1}>Vous n'avez encore rien ajouté à votre panier!</h1>
      <h1 className={styles.emoji} role="img" aria-label="shocked"> 😱</h1>
    </div>
    </>
  );
};


