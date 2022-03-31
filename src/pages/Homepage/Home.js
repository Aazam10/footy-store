import React from "react";
import "./Home.css";
import { nikeImage2, chelseaTee, preMatchTee, jordans } from "../../assets";
import { ProductCategory } from "./component/ProductCategory";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useProduct } from "../../context/data/ProductContext";
const Home = () => {
  const { categories, setCategories } = useProduct();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get("/api/categories");
        if (response.status === 200) {
          setCategories(response.data.categories);
        } else {
          throw new Error();
        }
      } catch (error) {
        alert(error);
      }
    })();
  }, []);
  console.log(categories.map((category) => category.categoryName));
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
                cardImg={category.image}
                cardAlt={category.categoryName}
                cardOverlay={category.categoryName}
              />
            );
          })}
          {/* <ProductCategory
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
          /> */}
        </div>
      </div>
    </main>
  );
};

export { Home };
