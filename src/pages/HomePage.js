import React, { useContext, useEffect } from "react";

import { ShopContext } from "../context/shopContext";

export const HomePage = () => {
  //desctructure shopcontext, want all products on the homepage
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading....</div>;

  return (
    <div>
      {products.map((product) => (
        <h1>{product.title}</h1>
      ))}
    </div>
  );
};
