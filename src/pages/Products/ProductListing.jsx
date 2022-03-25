import "./ProductListing.css";
import { ProductCard } from "./components/ProductCard";
import { useProduct } from "../../context/data/ProductContext";
import { Filters } from "./components/Filters";
import { useFilter } from "../../context/data/FilterContext";
import { useCart } from "../../context/data/CartContext";
import { useAuth } from "../../context/data/AuthContext";
import { useWishlist } from "../../context/data/WishlistContext";
import {
  sortData,
  ratingFilter,
  categoryFilter,
  priceFilter,
  addToCart,
} from "../../utils";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { addToCartService } from "../../services/addToCartService";

const ProductListing = () => {
  const { products } = useProduct();
  const { cartState, cartDispatch } = useCart();
  const { authState } = useAuth();
  const { cart } = cartState;
  const { token } = authState;
  const navigate = useNavigate();
  // const { wishlistState, wishlistDispatch } = useWishlist();
  // console.log(wishlistDispatch, wishlistState);
  // const cart = [{ id: 1, name: "shoes" }];
  // console.log(cart, token);
  //TO CHECK IF ITEM IS IN CART
  const productCardButtonAction = (id) => {
    const item = cart.find((cartItem) => cartItem._id === id);
    return item ? "Go To Cart" : "Add To Cart";
  };

  //FUNCTION INVOKED IF CTA IS ADD TO CART

  // const addToCart = async (product, token, cartDispatch) => {
  //   const response = await addToCartService(product, token);
  //   // console.log(product, token, response);
  //   cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
  // };

  const addToCartHandler = (id) => {
    const product = products.find((product) => product._id === id);
    // console.log(product, token, cartDispatch);
    addToCart(product, token, cartDispatch);
    // addToCartService(product, token);
  };

  // const addToCartService = (product, token) => {
  //   return axios.post(
  //     "/api/user/cart",
  //     { product },
  //     { headers: { authorization: token } }
  //   );
  //   // cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
  // };
  // FUNCTION TO CHECK WHAT CTA IS PRESENT AND TAKE ACTION ACCORDINGLY
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
