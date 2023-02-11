const calcTotal = () => {
    let sum = 0;
    for (const item of cart) {
      sum += item.price * item.purchaseQuantity;
    }
    setTotal(sum.toFixed(2));
  };