import React from "react";

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "RANGE_INPUT":
      return { ...state, rangeValue: action.payload };

    default:
      return state;
  }
};

export { filterReducer };
