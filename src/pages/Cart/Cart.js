import "./Cart.css";
import { chelseaTee } from "../../assets";
import { CartCard } from "./components/CartCard";
import { CartBill } from "./components/CartBill";
import { useEffect } from "react";
import axios from "axios";

import { useAuth } from "../../context/data/AuthContext";
import { useCart } from "../../context/data/CartContext";

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

  console.log(cart);
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

  return (
    <div>
      <h2 className="cart-title-main">My CART</h2>

      <main className="cart-wrapper">
        {cart.length > 0 ? (
          cart.map((cartItem) => {
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
              />
            );
          })
        ) : (
          <p>"No Products in cart continue shopping"</p>
        )}

        <CartBill />
      </main>
    </div>
  );
};

export { Cart };
