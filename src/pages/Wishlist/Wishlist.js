import React from "react";
import "./Wishlist.css";
import { chelseaTee } from "../../assets";
import { WishlistCard } from "./components/WishlistCard";
import { useWishlist } from "../../context/data/WishlistContext";
import { useAuth } from "../../context/data/AuthContext";
import { removeFromWishlist } from "../../utils/removeFromWishlist";

const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;
  const { authState } = useAuth();
  const { token } = authState;
  console.log(wishlist, token);

  const removeFromWishlistHandler = (id) => {
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
            />
          );
        })}
      </main>
    </>
  );
};

export { Wishlist };
