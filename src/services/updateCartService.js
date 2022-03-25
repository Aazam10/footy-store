import axios from "axios";
const updateCartService = (id, type, token) => {
  return axios.post(
    `/api/user/cart/${id}`,
    { action: { type: type } },
    { headers: { authorization: token } }
  );
};
export { updateCartService };
