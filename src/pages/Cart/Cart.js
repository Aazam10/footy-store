import "./Cart.css";
import { CartCard } from "./components/CartCard";
import { CartBill } from "./components/CartBill";
import { useEffect } from "react";
import axios from "axios";

import { useAuth } from "../../context/data/AuthContext";
import { useCart } from "../../context/data/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { authState } = useAuth();
  const { token } = authState;
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;

  // useEffect(() => {
  //   (async function () {
  //     const response = await axios.get("/api/user/cart", {
  //       headers: { authorization: token },
  //     });
  //     console.log(response.data.cart);
  //     console.log("cart loaded");
  //   })();
  // }, []);

  const removeFromCartService = (id, token) => {
    return axios.delete(`/api/user/cart/${id}`, {
      headers: { authorization: token },
    });
  };

  const removeFromCart = async (id, token) => {
    const response = await removeFromCartService(id, token);
    cartDispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart });
  };

  const removeFromCartHandler = (id) => {
    removeFromCart(id, token);
  };

  console.log(cart, token);
  const updateCartService = (id, type, token) => {
    return axios.post(
      `/api/user/cart/${id}`,
      { action: { type: type } },
      { headers: { authorization: token } }
    );
  };

  const updateCartItem = async (id, type, token) => {
    const response = await updateCartService(id, type, token);
    cartDispatch({ type: "UPDATE_CART", payload: response.data.cart });
  };

  const updateCartItemClickHandler = (id, type) => {
    updateCartItem(id, type, token);
  };

  const getCartBill = (cart) => {
    const cartDetails = cart.reduce(
      (details, cartItem) => {
        return {
          ...details,
          qty: details.qty + cartItem.qty,
          totalAmount:
            details.totalAmount + cartItem.qty * cartItem.discountedPrice,
        };
      },
      { qty: 0, totalAmount: 0 }
    );
    return cartDetails;
  };

  console.log(getCartBill(cart));

  return (
    <div>
      <h2 className="cart-title-main">My CART</h2>
      {cart.length > 0 ? (
        <main className="cart-wrapper">
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
              />
            );
          })}

          <CartBill />
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
