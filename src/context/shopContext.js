import React, { Component } from "react";
import Client from "shopify-buy";

//creates a context object, used with provider
const ShopContext = React.createContext();

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
});

class ShopProvider extends Component {
  //state starts with a default value when a Component mounts and then suffers from mutations in time
  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  };

  // load data from a remote endpoint, instantiate the network request
  componentDidMount() {
    //if there is a checkout id already in local storage then fetch it, do not invoke createCheckout function
    //if there is not then do the function
    if (localStorage.checkout_id) {
      this.fetchCheckout(localStorage.checkout_id);
    } else {
      this.createCheckout();
    }
  }

  //creates a new checkout, keeps products in user cart checkout, save checkout id in local storage
  createCheckout = async () => {
    // Create an empty checkout
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout_id", checkout.id);
    this.setState({ checkout: checkout });
  };

  //fetches existing user checkout by the checkout id
  fetchCheckout = async (checkoutId) => {
    client.checkout.fetch(checkoutId).then((checkout) => {
      this.setState({ checkout: checkout });
    });
  };

  //adds new item to checkout based on variantid and quantity
  //shopify creates product variantid automatically
  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId: variantId,
        // parses a string argument and returns an intege
        quantity: parseInt(quantity, 10),
      },
    ];
    //adds to checkout
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );
    this.setState({ checkout: checkout });

    //open cart when new line item is added
    this.openCart();
  };

  //removes a item from the cart
  removeLineItem = async (lineItemIdsToRemove) => {
    // Remove an item from the checkout
    const checkout = await client.checkout.removeLineItems(
      this.state.checkout.id,
      lineItemIdsToRemove
    );
    this.setState({ checkout: checkout });
  };

  fetchAllProducts = async () => {
    // Fetch all products in your shop
    const products = await client.product.fetchAll();
    // Do something with the products
    this.setState({ products: products });
  };

  //uses product url handle rather than id to fetch data
  fetchProductWithHandle = async (handle) => {
    // Fetch a single product by Handle
    const product = await client.product.fetchByHandle(handle);
    this.setState({ product: product });
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };

  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  closeMenu = () => {};

  openMenu = () => {};

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithHandle: this.fetchProductWithHandle,
          addItemToCheckout: this.addItemToCheckout,
          removeLineItem: this.removeLineItem,
          closeCart: this.closeCart,
          openCart: this.openCart,
          closeMenu: this.closeMenu,
          openMenu: this.openMenu,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopCosumer = ShopContext.Consumer;

export { ShopCosumer, ShopContext };

export default ShopProvider;
