import { useReducer } from "react";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: action.payload };
    case "UPDATE_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "REMOVE_FROM_CART":
      return { ...state, cart: action.payload };

    case "GET_CART":
      return { ...state, cart: action.payload };

    case "EMPTY_CART":
      return { ...state, cart: [] };
  }
};

export { cartReducer };
