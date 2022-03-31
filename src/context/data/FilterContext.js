import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../../reducer/filterReducer";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    sortBy: "",
    rangeValue: 5000,
    // jordans: false,
    // vapor: false,
    // footballShoes: false,
    // clubMerch: false,
    category: [],
    ratings: "",
  });
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };
