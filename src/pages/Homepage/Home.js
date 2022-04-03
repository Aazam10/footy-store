import React from "react";
import "./Home.css";
import { ProductCategory } from "./component/ProductCategory";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useProduct } from "../../context/data/ProductContext";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../context/data/FilterContext";
const Home = () => {
  const { categories } = useProduct();
  const navigate = useNavigate();
  const { dispatch } = useFilter();
  const categoryCardClickHandler = (categoryName) => {
    dispatch({ type: "CATEGORIES", payload: { category: categoryName } });
    navigate("/products");
  };

  useEffect(() => {
    dispatch({ type: "CLEAR" });
  }, []);

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
          {categories.map((category) => {
            return (
              <ProductCategory
                key={category._id}
                categoryName={category.categoryName}
                cardImg={category.image}
                cardAlt={category.categoryName}
                cardOverlay={category.categoryName}
                categoryCardClickHandler={categoryCardClickHandler}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export { Home };
