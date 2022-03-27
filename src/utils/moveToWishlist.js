import { addToWishlist } from "./addToWishlist";

const moveToWishlist = (id, item, products, token, wishlistDispatch) => {
  if (!item) {
    const product = products.find((product) => product._id === id);
    addToWishlist(product, token, wishlistDispatch);
  }
};

export { moveToWishlist };
