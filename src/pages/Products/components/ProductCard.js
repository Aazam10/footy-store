import { useWishlist } from "../../../context/data/WishlistContext";
import { useState } from "react";
import { useProduct } from "../../../context/data/ProductContext";
import { useAuth } from "../../../context/data/AuthContext";
import { useNavigate } from "react-router-dom";
import { removeFromWishlist, addToWishlist } from "../../../utils";
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
  cardButtonActionText,
  cardButtonAction,
}) => {
  const { products } = useProduct();
  const { authState } = useAuth();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;
  const { token } = authState;
  const navigate = useNavigate();

  const checkInWishlist = (id) => {
    const item = wishlist.find((product) => product._id === id);
    return item ? true : false;
  };

  const [isInWishList, setIsInWishlist] = useState(checkInWishlist(productId));

  const removeFromWishlistHandler = (id, setIsInWishlist) => {
    removeFromWishlist(id, token, wishlistDispatch);
    setIsInWishlist(false);
  };

  const addTowishListHandler = (id, setIsInWishlist) => {
    const product = products.find((item) => item._id === id);
    addToWishlist(product, token, wishlistDispatch);
    setIsInWishlist(true);
  };

  const wishListRoutHandler = (id) => {
    return checkInWishlist(id)
      ? removeFromWishlistHandler(id, setIsInWishlist)
      : addTowishListHandler(id, setIsInWishlist);
  };

  return (
    <div className="card card-shadow">
      <div
        className="card-badges"
        onClick={() =>
          token ? wishListRoutHandler(productId) : navigate("/login")
        }
      >
        <i
          className={`fa fa-heart card-badge-icon ${
            isInWishList ? "card-wishlist" : "card-not-wishlist"
          }`}
          aria-hidden="true"
        ></i>
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
          <button
            className="btn btn-primary ecomm-btn align-center"
            onClick={() => cardButtonAction(productId)}
          >
            {cardButtonActionText(productId)}
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
