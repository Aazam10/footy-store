const WishlistCard = ({
  productId,
  productImg,
  productAlt,
  productTitle,
  productSubTitle,
  originalPrice,
  discountPercentage,
  discountedPrice,
  removeFromWishlistHandler,
  moveToCartHandler,
}) => {
  return (
    <div className=" card wishlist-card card-shadow">
      <div
        className="card-badges"
        onClick={() => removeFromWishlistHandler(productId)}
      >
        <i
          className="fa fa-heart card-badge-icon wishlist-card-badge-icon"
          aria-hidden="true"
        ></i>
      </div>
      <div className="card-header">
        <img
          className="card-image wishlist-card-image"
          src={productImg}
          alt={productAlt}
        />
        <div className="card-header-text">
          <div className="card-title pd-side-05 margin-y-05">
            {productTitle}
          </div>
          <div className="card-subtitle pd-side-05">{productSubTitle}</div>
        </div>
      </div>
      <div className="wishlist-card-text pd-side-05 margin-y-05 ecom-card-price">
        <p className="price">Rs. {discountedPrice}</p>
        <p className="text-strike gray-text">{originalPrice}</p>
        <p className="offer-text">{discountPercentage}% off</p>
      </div>
      <div className="card-footer">
        <div className="card-button ecom-card-button">
          <button
            className="btn btn-primary ecomm-btn align-center"
            onClick={() => moveToCartHandler(productId)}
          >
            Move to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export { WishlistCard };
