import React from "react";
import { Link, Navigate } from "react-router-dom";
import "../Navbar/Navbar.css";
import { useAuth } from "../../context/data/AuthContext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { authState, authDispatch } = useAuth();
  const Navigate = useNavigate();
  const logoutHandler = () => {
    Navigate("/login");
    console.log("clicked");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    authDispatch({
      type: "LOGOUT",
      payload: {
        user: "",
        token: "",
      },
    });
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

        <Link to="/wishilist">
          <div className="badge-wrapper">
            <i className="fa fa-heart-o"></i>
            <div className="badge-number">99+</div>
          </div>
        </Link>
        <Link to="/cart">
          <div className="badge-wrapper">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <div className="badge-number">10</div>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export { Navbar };
