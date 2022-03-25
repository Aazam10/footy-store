import axios from "axios";
const addToCartService = (product, token) => {
  // console.log(product, token);
  return axios.post(
    "/api/user/cart",
    { product },
    { headers: { authorization: token } }
  );
  // cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
};

export { addToCartService };
