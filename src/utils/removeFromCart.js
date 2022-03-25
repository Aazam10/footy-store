import { removeFromCartService } from "../services/removeFromCartService";

const removeFromCart = async (id, token, cartDispatch) => {
  try {
    const response = await removeFromCartService(id, token);
    if (response.status === 200) {
      cartDispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart });
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  }
};

export { removeFromCart };
