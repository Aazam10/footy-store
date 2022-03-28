import { removeFromWishlistService } from "../services/removeFromWishlistService";

const removeFromWishlist = async (id, token, wishlistDispatch) => {
  try {
    const response = await removeFromWishlistService(id, token);
    if (response.status === 200) {
      wishlistDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: response.data.wishlist,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  }
};

export { removeFromWishlist };
