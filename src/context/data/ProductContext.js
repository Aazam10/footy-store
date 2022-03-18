import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get("/api/products");
        if (response.status === 200) {
          setProducts(response.data.products);
        }
      } catch (error) {
        console.log("error while fetching products", error);
      }
    })();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => {
  return useContext(ProductContext);
};

export { ProductProvider, useProduct };
