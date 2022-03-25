import axios from "axios";
const removeFromCartService = (id, token) => {
  return axios.delete(`/api/user/cart/${id}`, {
    headers: { authorization: token },
  });
};

export { removeFromCartService };
