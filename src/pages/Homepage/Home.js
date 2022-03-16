import React from "react";
import "./Home.css";
import { nikeImage2, chelseaTee, preMatchTee, jordans } from "../../assets";
import { ProductCategory } from "./component/ProductCategory";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main>
      <div className="hero-section">
        <div className="hero-text">
          <p className="hero-title">Footy-Store</p>
          <p className="hero-desc">Best Sports Apparels</p>
          <div className=" hero-link">
            <Link to="/products">
              <button className="btn btn-link btn-hero ">SHOP NOW</button>
            </Link>
          </div>
        </div>
      </div>

      {/* <!-- FEATURED --> */}
      <div className="featured-categories">
        <h2 className="featured-title">Featured Categories</h2>

        <div className="featured-cards">
          <ProductCategory
            cardImg={nikeImage2}
            cardAlt={"football-shoes"}
            cardOverlay={"Football Boots"}
          />
          <ProductCategory
            cardImg={chelseaTee}
            cardAlt={"Football Jersey"}
            cardOverlay={"Football Jersey"}
          />
          <ProductCategory
            cardImg={preMatchTee}
            cardAlt={"Club Merchandise"}
            cardOverlay={"Club Merchandise"}
          />
          <ProductCategory
            cardImg={jordans}
            cardAlt={"Jordans"}
            cardOverlay={"Jordans"}
          />
        </div>
      </div>

      {/* <!-- TRENDING --> */}
    </main>
  );
};

export { Home };
