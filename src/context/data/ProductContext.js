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
  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const response = await axios.get("/api/products");
  //       if (response.status === 200) {
  //         setProducts(response.data.products);
  //       }
  //     } catch (error) {
  //       console.log("error while fetching products", error);
  //     }
  //   })();
  // }, []);
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
