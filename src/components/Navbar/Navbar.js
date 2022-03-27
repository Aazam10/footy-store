import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import { useAuth } from "../../context/data/AuthContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/data/CartContext";
import { useWishlist } from "../../context/data/WishlistContext";
const Navbar = () => {
  const { authState, authDispatch } = useAuth();
  const { cartState, cartDispatch } = useCart();
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();
  console.log(wishlist);
  const { cart } = cartState;
  const { token } = authState;
  const navigate = useNavigate();

  const cartIconClickHandler = () => {
    token ? navigate("/cart") : navigate("/login");
  };
  const wishlistIconClickHandler = () => {
    token ? navigate("/wishlist") : navigate("/login");
  };

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    authDispatch({
      type: "LOGOUT",
      payload: {
        user: "",
        token: "",
      },
    });

    cartDispatch({ type: "EMPTY_CART" });
    wishlistDispatch({ type: "EMPTY_WISHLIST" });
    navigate("/login");
  };
  return (
    <header className="ecommerce-header">
      <div className="ecomm-logo">
        <Link to="/">
          <div className="ecomm-logo-link">Footy-Store</div>
        </Link>
      </div>
      <div className="search-container">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input
          type="text"
          name="search"
          className="search-bar"
          placeholder="Search for product"
          id=""
        />
      </div>
      <nav className="navigation">
        {!authState.token ? (
          <Link to="/login">
            <button className="btn btn-login">Login</button>
          </Link>
        ) : (
          <button onClick={logoutHandler} className="btn btn-login">
            Logout
          </button>
        )}
        <div className="badge-wrapper" onClick={wishlistIconClickHandler}>
          <i className="fa fa-heart-o"></i>
          {wishlist.length != 0 ? (
            <div className="badge-number">{wishlist.length}</div>
          ) : null}
        </div>
        <div className="badge-wrapper" onClick={cartIconClickHandler}>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          {cart.length != 0 ? (
            <div className="badge-number">{cart.length}</div>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
