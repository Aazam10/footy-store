import "./ProductListing.css";
import { ProductCard } from "./components/ProductCard";
import { useProduct } from "../../context/data/ProductContext";
import { Filters } from "./components/Filters";
import { useFilter } from "../../context/data/FilterContext";
import {
  sortData,
  ratingFilter,
  categoryFilter,
  priceFilter,
} from "../../utils";

const ProductListing = () => {
  const { products } = useProduct();

  const { state } = useFilter();
  const ratingFilteredData = ratingFilter(products, state);
  const categoryFilteredData = categoryFilter(ratingFilteredData, state);
  const priceFiltered = priceFilter(categoryFilteredData, state);

  const sortedData = sortData(priceFiltered, state);

  return (
    <div>
      <main className="product-main-container">
        <Filters />
        <section className="product-list-container">
          <div className="product-list-title-container">
            <h2 className="product-list-title">Showing All Products</h2>
            <p className="product-list-subtitle">(Showing All Products)</p>
          </div>
          <div className="product-card-grid">
            {sortedData.length <= 0 ? (
              <p>No Products Available</p>
            ) : (
              sortedData.map((product) => {
                return (
                  <ProductCard
                    key={product._id}
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
              })
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export { ProductListing };
