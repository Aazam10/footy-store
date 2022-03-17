import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
const DataContext = createContext();
import { DataReducer } from "../../reducer/DataReducer";

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, { products: [] });
  useEffect(() => {
    (async function () {
      try {
        const { data: products } = await axios.get("/api/products");
        dispatch({ type: "INITIALIZE_PRODUCTS", payload: products.products });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <DataContext.Provider
      value={{ products: state.products, dataDispatch: dispatch }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { DataProvider, useData };
