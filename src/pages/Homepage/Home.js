import React from "react";
import "./Home.css";
import { nikeImage2, chelseaTee, preMatchTee, jordans } from "../../assets";
import { ProductCategory } from "./component/ProductCategory";

const Home = () => {
  return (
    <main>
      <div className="hero-section">
        <div className="hero-text">
          <p className="hero-title">Footy-Store</p>
          <p className="hero-desc">Best Sports Apparels</p>

          <button className="btn btn-link btn-hero">
            <a
              href="./product-list/product-list.html"
              className="link-default hero-link"
            >
              SHOP NOW
            </a>
          </button>
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

      <div className="trending-categories">
        <h2 className="trending-title">Trending</h2>
        {/* <!-- CARD 1 --> */}
        <div className="trending-cards">
          <div className="card card-shadow">
            <div className="card-badges">
              <p className="card-badge-text">Best Seller</p>
              <i className="fa fa-heart card-badge-icon" aria-hidden="true"></i>
            </div>
            <div className="card-header">
              <img className="card-image" src={nikeImage2} alt="card-image" />
              <div className="card-header-text">
                <div className="card-title pd-side-05 margin-y-05">
                  Nike Phantom GT2
                </div>
                <div className="card-subtitle pd-side-05">
                  Multi Ground Football Boot
                </div>
              </div>
            </div>
            <div className="card-text pd-side-05 margin-y-05 ecom-card-price">
              <p className="price">Rs. 6,797</p>
              <p className="text-strike gray-text">Rs. 8495</p>
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
          {/* <!-- CARD 2 --> */}
          <div className="card card-shadow">
            <div className="card-badges">
              <p className="card-badge-text">Best Seller</p>
              <i className="fa fa-heart card-badge-icon" aria-hidden="true"></i>
            </div>
            <div className="card-header">
              <img className="card-image" src={chelseaTee} alt="card-image" />
              <div className="card-header-text">
                <div className="card-title pd-side-05 margin-y-05">
                  Chelsea FC Jersey
                </div>
                <div className="card-subtitle pd-side-05">
                  Away Football Jersey
                </div>
              </div>
            </div>
            <div className="card-text pd-side-05 margin-y-05 ecom-card-price">
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
        </div>
      </div>
    </main>
  );
};

export { Home };
