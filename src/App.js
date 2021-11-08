import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
