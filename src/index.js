import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.js";
import { ProductProvider } from "./context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,
  rootElement
);
