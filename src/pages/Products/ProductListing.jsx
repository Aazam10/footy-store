import React from "react";
import "./ProductListing.css";
import { ProductCard } from "./components/ProductCard";
import { chelseaTee } from "../../assets";

import { useData } from "../../context/data/dataContext";

const ProductListing = () => {
  const { products: data } = useData();
  console.log(data);

  return (
    <div>
      <main className="product-main-container">
        <aside className="product-filter-container">
          <div className="filter-header">
            <h3 className="filter-title">Filter</h3>
            <p className="filter-reset">Clear</p>
          </div>
          <div className="price-range-container">
            <h3 className="price-title">Price</h3>
            <div className="slider-container">
              <div className="price-range">
                <p>0</p>
                <p>2500</p>
                <p>5000</p>
              </div>
              <input
                type="range"
                name="rangeInput"
                className="slider"
                min="0"
                max="5000"
              />
            </div>
          </div>
          <div className="category-container">
            <h3 className="category-title">Category</h3>
            <div className="checkbox">
              <label for="checkbox-1">
                <input id="checkbox-1" name="checkbox" type="checkbox" />
                Shoes
              </label>
            </div>
            <div className="checkbox">
              <label for="checkbox-2">
                <input id="checkbox-2" name="checkbox" type="checkbox" />
                Topwear
              </label>
            </div>
            <div className="checkbox">
              <label for="checkbox-3">
                <input id="checkbox-3" name="checkbox" type="checkbox" />
                Bottomwear
              </label>
            </div>
          </div>
          <div className="rating-container">
            <h3 className="rating-title">Ratings</h3>
            <div className="radio">
              <label for="four-star">
                <input id="four-star" name="rating" type="radio" />4 Stars &
                Above
              </label>
            </div>
            <div className="radio">
              <label for="three-star">
                <input id="three-star" name="rating" type="radio" />3 Stars &
                Above
              </label>
            </div>
            <div className="radio">
              <label for="two-star">
                <input id="two-star" name="rating" type="radio" />2 Stars &
                Above
              </label>
            </div>
            <div className="radio">
              <label for="one-star">
                <input id="one-star" name="rating" type="radio" />1 Stars &
                Above
              </label>
            </div>
          </div>
          <div className="sortby-container">
            <h3 className="sortby-title">Sort By</h3>
            <div className="radio">
              <label for="high-to-low">
                <input id="high-to-low" name="sort" type="radio" />
                Price- High to Low
              </label>
            </div>
            <div className="radio">
              <label for="low-to-high">
                <input id="low-to-high" name="sort" type="radio" />
                Price- Low to High
              </label>
            </div>
          </div>
        </aside>
        <section className="product-list-container">
          <div className="product-list-title-container">
            <h2 className="product-list-title">Showing All Products</h2>
            <p className="product-list-subtitle">(Showing All Products)</p>
          </div>
          <div className="product-card-grid">
            {data.map((product) => {
              return (
                <ProductCard
                  productImg={product.image}
                  productAlt={"item"}
                  productTitle={product.title}
                  productSubTitle={product.subtitle}
                  originalPrice={product.OriginalPrice}
                  discountPercentage={product.discountPercentage}
                  discountedPrice={product.discountedPrice}
                  categoryName={"product.categoryName"}
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export { ProductListing };
