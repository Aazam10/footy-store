import { updateCartService } from "../services/updateCartService";

const updateCartItem = async (id, type, token, cartDispatch) => {
  try {
    const response = await updateCartService(id, type, token);
    if (response.status === 200) {
      cartDispatch({ type: "UPDATE_CART", payload: response.data.cart });
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  }
};

export { updateCartItem };
