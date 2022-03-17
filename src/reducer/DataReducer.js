import React from "react";

const DataReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_PRODUCTS":
      return { ...state, products: action.payload };
  }
};

export { DataReducer };
