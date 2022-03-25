const WishlistCard = ({ wishlistImg }) => {
  return (
    <div className=" card wishlist-card card-shadow">
      <div className="card-badges">
        <i
          className="fa fa-heart card-badge-icon wishlist-card-badge-icon"
          aria-hidden="true"
        ></i>
      </div>
      <div className="card-header">
        <img
          className="card-image wishlist-card-image"
          src={wishlistImg}
          alt="card-image"
        />
        <div className="card-header-text">
          <div className="card-title pd-side-05 margin-y-05">
            Nike Mercurial Vapor 14 Club TF
          </div>
          <div className="card-subtitle pd-side-05">Turf Football Shoe</div>
        </div>
      </div>
      <div className="wishlist-card-text pd-side-05 margin-y-05 ecom-card-price">
        <p className="price">Rs. 5000</p>
        <p className="text-strike gray-text">4995</p>
        <p className="offer-text">19% off</p>
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

export { WishlistCard };
