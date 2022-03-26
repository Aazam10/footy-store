import axios from "axios";

const removeFromWishlistService = (id, token) => {
  return axios.delete(`/api/user/wishlist/${id}`, {
    headers: { authorization: token },
  });
};

export { removeFromWishlistService };
