import React from 'react';
import CartItem from '../CartItem';
import styles from '/styles/ShoppingPanier/ClientPanier.module.css';

export default function ClientPanier() {
  return (
    <div className="cart">
    <div className="close" onClick={toggleCart}>
      [close]
    </div>
    <h2>Shopping Cart</h2>
    {state.cart.length ? (
      <div>
        {state.cart.map((item) => (s
          <CartItem key={item._id} item={item} />
        ))}

        <div className="flex-row space-between">
          <strong>Total: ${calculateTotal()}</strong>

          {Auth.loggedIn() ? (
            <button onClick={submitCheckout}>Checkout</button>
          ) : (
            <span>(log in to check out)</span>
          )}
        </div>
      </div>
    ) : (
      <h3>
        <span role="img" aria-label="shocked">
          😱
        </span>
        You haven't added anything to your cart yet!
      </h3>
    )}
  </div>
);
}
