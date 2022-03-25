const CartBill = ({ quantity, totalPrice }) => {
  return (
    <section className="price-details">
      <h2 className="price-heading">Price Details</h2>
      <hr />
      <div className="cart-price flex-container">
        <p className="price-desc">Price ({quantity} items)</p>
        <p className="price-amount">Rs.{totalPrice}</p>
      </div>

      <div className="cart-discount flex-container">
        <p className="discount-desc">Discount</p>
        <p className="discount-amount">300</p>
      </div>
      <div className="cart-delivery flex-container">
        <p className="delivery-desc">Delivery Charges</p>
        <p className="delivery-amount">Rs.499</p>
      </div>
      <hr />
      <div className="cart-total flex-container">
        <p className="total-desc">TOTAL AMOUNT</p>
        <p className="total-amount">Rs.{totalPrice - 300 + 499}</p>
      </div>
      <hr />
      <p className="saving-desc">You will save Rs. 1999 on this order</p>
      <button className="btn cart-btn-primary btn-primary btn-order">
        Place Order
      </button>
    </section>
  );
};

export { CartBill };
