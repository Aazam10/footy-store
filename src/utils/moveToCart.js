import { updateCartItem } from "./updateCartItem";
import { addToCart } from "./addToCart";
const moveToCart = (id, item, token, products, cartDispatch) => {
  if (item) {
    updateCartItem(id, "increment", token, cartDispatch);
  } else {
    const product = products.find((product) => product._id === id);
    addToCart(product, token, cartDispatch);
  }
};

export { moveToCart };
