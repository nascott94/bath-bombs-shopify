import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

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
        <Link to={`/product/${product.handle}`} key={product.title}>
          {product.title}
        </Link>
      ))}
    </div>
  );
};
