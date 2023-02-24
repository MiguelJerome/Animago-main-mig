import React from 'react';

const SubmitCheckout = ({ totalPriceInCart, cart, setCart, setOrders, router }) => {
  const handleSubmit = () => {
    if (totalPriceInCart === 0) {
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

    setCart([]);
    router.push({
      pathname: '/AchatsPanier/HistoriqueCommande',
      query: { orders: JSON.stringify(orders) },
    });
  };

  return (
    <button onClick={handleSubmit}>
      Passer la commande
    </button>
  );
};

export default SubmitCheckout;
