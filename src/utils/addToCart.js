import { addToCartService } from "../services/addToCartService";

const addToCart = async (product, token, cartDispatch) => {
  //   console.log(product, token, cartDispatch);
  try {
    const response = await addToCartService(product, token);
    // console.log(response);
    if (response.status === 201) {
      cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  }
};

export { addToCart };
