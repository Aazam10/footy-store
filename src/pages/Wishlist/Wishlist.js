import "./Wishlist.css";
import { WishlistCard } from "./components/WishlistCard";
import { useWishlist } from "../../context/data/WishlistContext";
import { useAuth } from "../../context/data/AuthContext";
import { useCart } from "../../context/data/CartContext";
import { moveToCart, removeFromWishlist } from "../../utils";
import { useProduct } from "../../context/data/ProductContext";

const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();
  const { wishlist } = wishlistState;
  const { authState } = useAuth();
  const { token } = authState;
  const { cart } = cartState;
  const { products } = useProduct();

  const removeFromWishlistHandler = (id) => {
    removeFromWishlist(id, token, wishlistDispatch);
  };

  const callMoveToCartHandler = (id) => {
    const item = cart.find((product) => product._id === id);
    moveToCart(id, item, token, products, cartDispatch);
    removeFromWishlist(id, token, wishlistDispatch);
  };

  return (
    <>
      <h2 className="wishlist-title">My Wishlist</h2>

      <main className="wishlist-items-container">
        {wishlist.map((product) => {
          return (
            <WishlistCard
              key={product._id}
              productId={product._id}
              productImg={product.image}
              productAlt={"item"}
              productTitle={product.title}
              productSubTitle={product.subtitle}
              originalPrice={product.originalPrice}
              discountPercentage={product.discountPercentage}
              discountedPrice={product.discountedPrice}
              removeFromWishlistHandler={removeFromWishlistHandler}
              callMoveToCartHandler={callMoveToCartHandler}
            />
          );
        })}
      </main>
    </>
  );
};

export { Wishlist };
