import "./Cart.css";
import { CartCard } from "./components/CartCard";
import { CartBill } from "./components/CartBill";
import { useAuth } from "../../context/data/AuthContext";
import { useCart } from "../../context/data/CartContext";
import { useWishlist } from "../../context/data/WishlistContext";
import { useProduct } from "../../context/data/ProductContext";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  updateCartItem,
  getCartBill,
  moveToWishlist,
} from "../../utils";

const Cart = () => {
  const { authState } = useAuth();
  const { token } = authState;
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;
  const { products } = useProduct();

  const callMoveToWishlistHandler = (id) => {
    const item = wishlist.find((product) => product._id === id);
    moveToWishlist(id, item, products, token, wishlistDispatch);
    removeFromCart(id, token, cartDispatch);
  };

  const removeFromCartHandler = (id) => {
    removeFromCart(id, token, cartDispatch);
  };

  const updateCartItemClickHandler = (id, type) => {
    updateCartItem(id, type, token, cartDispatch);
  };

  const { qty, totalAmount } = getCartBill(cart);

  return (
    <div>
      <h2 className="cart-title-main">My CART</h2>
      {cart.length > 0 ? (
        <main className="cart-wrapper">
          <div className="cart-card-wrapper">
            {cart.map((cartItem) => {
              return (
                <CartCard
                  key={cartItem._id}
                  cardId={cartItem._id}
                  cardImg={cartItem.image}
                  cardAlt={"card"}
                  cardTitle={cartItem.title}
                  cardDiscountedPrice={cartItem.discountedPrice}
                  cardOriginalPrice={cartItem.originalPrice}
                  cardDiscountedPercentage={cartItem.discountPercentage}
                  cardQuantity={cartItem.qty}
                  updateCartItemClickHandler={updateCartItemClickHandler}
                  removeFromCartHandler={removeFromCartHandler}
                  callMoveToWishlistHandler={callMoveToWishlistHandler}
                />
              );
            })}
          </div>
          <CartBill quantity={qty} totalPrice={totalAmount} />
        </main>
      ) : (
        <div className="card-no-products">
          <h2>No Products in cart continue shopping</h2>
          <Link to="/products">
            <button className="btn btn-primary btn-shop">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export { Cart };
