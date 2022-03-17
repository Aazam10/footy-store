import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
const Navbar = () => {
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
        <Link to="/login">
          <button className="btn btn-login">Login</button>
        </Link>
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
