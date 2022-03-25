import { getCartItemService } from "../services/getCartItemService";

const getCartItem = async (token, cartDispatch) => {
  try {
    const response = await getCartItemService(token);
    if (response.status === 200) {
      cartDispatch({ type: "GET_CART", payload: response.data.cart });
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  }
};

export { getCartItem };
