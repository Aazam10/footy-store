const getCartBill = (cart) => {
  const cartDetails = cart.reduce(
    (details, cartItem) => {
      return {
        ...details,
        qty: details.qty + cartItem.qty,
        totalAmount:
          details.totalAmount + cartItem.qty * cartItem.discountedPrice,
      };
    },
    { qty: 0, totalAmount: 0 }
  );
  return cartDetails;
};

export { getCartBill };
