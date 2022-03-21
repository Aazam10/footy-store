import React from "react";

const ProductCard = ({
  productId,
  productImg,
  productAlt,
  productTitle,
  productSubTitle,
  originalPrice,
  discountedPrice,
  categoryName,
  discountPercentage,
}) => {
  return (
    <div className="card card-shadow">
      <div className="card-badges">
        <i className="fa fa-heart card-badge-icon" aria-hidden="true"></i>
      </div>
      <div className="card-header">
        <img className="card-image" src={productImg} alt={productAlt} />
        <div className="card-header-text">
          <div className="card-title pd-side-05 margin-y-05">
            {productTitle}
          </div>
          <div className="card-subtitle pd-side-05">{productSubTitle}</div>
        </div>
      </div>
      <div className="card-text pd-side-05 margin-y-05 ecom-card-price">
        <p className="price">Rs.{discountedPrice}</p>
        <p className="text-strike gray-text">{originalPrice}</p>
        <p className="offer-text">{discountPercentage}</p>
      </div>
      <div className="card-footer">
        <div className="card-button ecom-card-button">
          <button className="btn btn-primary ecomm-btn align-center">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
