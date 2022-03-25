import axios from "axios";

const getCartItemService = (token) => {
  return axios.get("/api/user/cart", {
    headers: { authorization: token },
  });
};

export { getCartItemService };
