import { useWishlist } from "../../../context/data/WishlistContext";
import { useState } from "react";
import { useProduct } from "../../../context/data/ProductContext";
import axios from "axios";
import { useAuth } from "../../../context/data/AuthContext";
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
  // console.log(wishlistDispatch, wishlistState, productId);
  const checkInWishlist = (id) => {
    const item = wishlist.find((product) => product._id === id);
    return item ? true : false;
  };
  console.log(token);
  console.log(wishlist);

  const [isInWishList, setIsInWishlist] = useState(checkInWishlist(productId));

  const removeFromWishlistHandler = async (id, setIsInWishlist) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: { authorization: token },
      });
      console.log(response);
      wishlistDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: response.data.wishlist,
      });
      setIsInWishlist(false);
    } catch (error) {
      alert(error);
    }
  };

  const addTowishListHandler = async (id, setIsInWishlist) => {
    const product = products.find((item) => item._id === id);
    console.log(product);
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product },
        { headers: { authorization: token } }
      );
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: response.data.wishlist,
      });
      setIsInWishlist(true);
    } catch (error) {
      alert(error);
    }
  };

  const wishListRoutHandler = (id) => {
    console.log(checkInWishlist(id));
    return checkInWishlist(id)
      ? removeFromWishlistHandler(id, setIsInWishlist)
      : addTowishListHandler(id, setIsInWishlist);
  };

  console.log(isInWishList);
  // console.log(checkInWishlist(productId));
  return (
    <div className="card card-shadow">
      <div
        className="card-badges"
        onClick={() => wishListRoutHandler(productId)}
      >
        <i
          // className="fa fa-heart card-badge-icon card-not-wishlist "
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
