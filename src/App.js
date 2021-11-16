import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { NavBar } from "./components/NavBar";
import { Cart } from "./components/Cart";
import { NavMenu } from "./components/NavMenu";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Router className="App">
        <NavBar />
        <Cart />
        <NavMenu />
        <Switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
