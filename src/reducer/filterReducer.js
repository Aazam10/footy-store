const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "RANGE_INPUT":
      return { ...state, rangeValue: action.payload };

    case "CATEGORIES":
      return state.category.includes(action.payload.category)
        ? {
            ...state,
            category: state.category.filter(
              (cat) => cat != action.payload.category
            ),
          }
        : {
            ...state,
            category: [...state.category, action.payload.category],
          };
    case "RATING":
      return { ...state, ratings: action.payload };
    case "CLEAR":
      return {
        ...state,
        sortBy: "",
        rangeValue: 5000,
        category: [],
        ratings: "",
      };

    default:
      return state;
  }
};

export { filterReducer };
