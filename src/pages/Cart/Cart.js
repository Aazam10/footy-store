import "./Cart.css";
import { chelseaTee } from "../../assets";
import { CartCard } from "./components/CartCard";
import { CartBill } from "./components/CartBill";
import { useEffect } from "react";
import axios from "axios";

import { useAuth } from "../../context/data/AuthContext";
const Cart = () => {
  const { authState } = useAuth();
  const { token } = authState;

  useEffect(() => {
    (async function () {
      const response = await axios.get("/api/user/cart", {
        headers: { authorization: token },
      });
      console.log(response.data.cart);
      console.log("cart loaded");
    })();
  }, []);
  return (
    <div>
      <h2 className="cart-title-main">My CART</h2>

      <main className="cart-wrapper">
        <CartCard
          cardImg={chelseaTee}
          cardAlt={"card"}
          cardTitle={"Chelsea"}
          cardDiscountedPrice={2000}
          cardOriginalPrice={3000}
          cardDiscountedPercentage={25}
        />

        <CartBill />
      </main>
    </div>
  );
};

export { Cart };
