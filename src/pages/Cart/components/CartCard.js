const CartCard = ({
  cardId,
  cardImg,
  cardAlt,
  cardTitle,
  cardDiscountedPrice,
  cardOriginalPrice,
  cardDiscountedPercentage,
  cardQuantity,
  updateCartItemClickHandler,
  removeFromCartHandler,
  callMoveToWishlistHandler,
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
          {cardDiscountedPercentage} off
        </div>
        <div className="cart-product-quantity">
          <p>Quantity:</p>
          <div className="product-quantity-btn">
            {cardQuantity > 1 ? (
              <button
                className="minus"
                onClick={() => updateCartItemClickHandler(cardId, "decrement")}
              >
                -
              </button>
            ) : (
              <i
                className="fa fa-trash cart-card-delete"
                onClick={() => removeFromCartHandler(cardId)}
              ></i>
            )}

            <p className="quantity">{cardQuantity}</p>
            <button
              className="plus"
              onClick={() => updateCartItemClickHandler(cardId, "increment")}
            >
              +
            </button>
          </div>
        </div>
        <div className="button-action-wrapper">
          <button
            className="btn cart-btn-remove"
            onClick={() => removeFromCartHandler(cardId)}
          >
            Remove from cart
          </button>
          <button
            className="btn btn-outline cart-btn-move"
            onClick={() => callMoveToWishlistHandler(cardId)}
          >
            Move to Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

export { CartCard };
