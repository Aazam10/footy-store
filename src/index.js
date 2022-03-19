import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/data/ProductContext";
import { FilterProvider } from "./context/data/FilterContext";
import { AuthProvider } from "./context/data/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ProductProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </ProductProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
