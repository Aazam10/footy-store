import { createContext, useContext, useState } from "react";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
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
