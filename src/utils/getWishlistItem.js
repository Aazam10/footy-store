import { getWishlistService } from "../services/getWishlistService";

const getWishlistItem = async (token, wishlistDispatch) => {
  try {
    const response = await getWishlistService(token);
    if (response.status === 200) {
      wishlistDispatch({
        type: "GET_WISHLIST",
        payload: response.data.wishlist,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  }
};

export { getWishlistItem };
