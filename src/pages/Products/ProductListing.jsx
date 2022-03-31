import "./ProductListing.css";
import { ProductCard } from "./components/ProductCard";
import { useProduct } from "../../context/data/ProductContext";
import { Filters } from "./components/Filters";
import { useFilter } from "../../context/data/FilterContext";
import { useCart } from "../../context/data/CartContext";
import { useAuth } from "../../context/data/AuthContext";
import { useEffect } from "react";
import axios from "axios";
import {
  sortData,
  ratingFilter,
  categoryFilter,
  priceFilter,
  addToCart,
} from "../../utils";
import { useNavigate } from "react-router-dom";

const ProductListing = () => {
  const { products, setProducts } = useProduct();
  const { cartState, cartDispatch } = useCart();
  const { authState } = useAuth();
  const { cart } = cartState;
  const { token } = authState;
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get("/api/products");
        if (response.status === 200) {
          setProducts(response.data.products);
        }
      } catch (error) {
        console.log("error while fetching products", error);
      }
    })();
  }, []);

  // console.log(products);

  const productCardButtonAction = (id) => {
    const item = cart.find((cartItem) => cartItem._id === id);
    return item ? "Go To Cart" : "Add To Cart";
  };

  const addToCartHandler = (id) => {
    const product = products.find((product) => product._id === id);
    addToCart(product, token, cartDispatch);
  };

  const cardButtonAction = (id) => {
    if (token) {
      productCardButtonAction(id) === "Add To Cart"
        ? addToCartHandler(id)
        : navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  const { state } = useFilter();
  const ratingFilteredData = ratingFilter(products, state);
  const categoryFilteredData = categoryFilter(ratingFilteredData, state);
  console.log(categoryFilteredData);
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
                    productId={product._id}
                    productImg={product.image}
                    productAlt={"item"}
                    productTitle={product.title}
                    productSubTitle={product.subtitle}
                    originalPrice={product.originalPrice}
                    discountPercentage={product.discountPercentage}
                    discountedPrice={product.discountedPrice}
                    categoryName={product.categoryName}
                    cardButtonActionText={productCardButtonAction}
                    cardButtonAction={cardButtonAction}
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
