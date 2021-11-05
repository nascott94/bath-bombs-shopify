import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <div>
      <Router>
        <Route path="/products/:handle">
          <ProductPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
