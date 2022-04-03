import { createContext, useContext, useState, useEffect } from "react";
const ProductContext = createContext();
import axios from "axios";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get("/api/categories");
        if (response.status === 200) {
          setCategories(response.data.categories);
        } else {
          throw new Error();
        }
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, categories, setCategories }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => {
  return useContext(ProductContext);
};

export { ProductProvider, useProduct };
