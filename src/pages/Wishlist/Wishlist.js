import React from "react";
import "./Wishlist.css";
import { chelseaTee } from "../../assets";
import { WishlistCard } from "./components/WishlistCard";
import { useWishlist } from "../../context/data/WishlistContext";

const Wishlist = () => {
  const { wishlistState } = useWishlist();
  const { wishlist } = wishlistState;
  console.log(wishlist);
  return (
    <>
      <h2 className="wishlist-title">My Wishlist</h2>

      <main className="wishlist-items-container">
        {wishlist.map((product) => {
          return <WishlistCard />;
        })}
      </main>
    </>
  );
};

export { Wishlist };
