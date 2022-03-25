import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/data/ProductContext";
import { FilterProvider } from "./context/data/FilterContext";
import { AuthProvider } from "./context/data/AuthContext";
import { CartProvider } from "./context/data/CartContext";
import { WishlistProvider } from "./context/data/WishlistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <ProductProvider>
              <FilterProvider>
                <App />
              </FilterProvider>
            </ProductProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
