import { chelseaTee } from "../../../assets";

const CartCard = ({
  cardImg,
  cardAlt,
  cardTitle,
  cardDiscountedPrice,
  cardOriginalPrice,
  cardDiscountedPercentage,
}) => {
  return (
    <section className="card-header cart-card-horizontal card-horizontal">
      <img
        className="card-image cart-card-horizontal-image card-horizontal-image"
        src={cardImg}
        alt={cardAlt}
      />
      <div className="cart-card-header-text">
        <div className="card-title cart-desc margin-y-05">{cardTitle}</div>
        <div className="cart-card-subtitle card-cart-price">
          <p className="cart-discounted-price">Rs.{cardDiscountedPrice}</p>
          <p className="actual-price gray-text text-strike">
            Rs.{cardOriginalPrice}
          </p>
        </div>
        <div className="cart-discount-percentage gray-text">
          {cardDiscountedPercentage}% off
        </div>
        <div className="cart-product-quantity">
          <p>Quantity:</p>
          <div className="product-quantity-btn">
            <button className="minus">-</button>
            <p className="quantity">1</p>
            <button className="plus">+</button>
          </div>
        </div>
        <div className="button-action-wrapper">
          <button className="btn cart-btn-remove">Remove from cart</button>
          <button className="btn btn-outline cart-btn-move">
            Move to Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

export { CartCard };
