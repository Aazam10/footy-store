const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "RANGE_INPUT":
      return { ...state, rangeValue: action.payload };
    // case "FOOTBALL_SHOES":
    //   return { ...state, footballShoes: action.payload };
    // case "JORDANS":
    //   return { ...state, jordans: action.payload };
    // case "CLUB_MERCH":
    //   return { ...state, clubMerch: action.payload };
    // case "VAPOR":
    //   return { ...state, vapor: action.payload };

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
        jordans: false,
        vapor: false,
        footballShoes: false,
        clubMerch: false,
        ratings: "",
      };

    default:
      return state;
  }
};

export { filterReducer };
