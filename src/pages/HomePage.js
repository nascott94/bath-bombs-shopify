import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image } from "@chakra-ui/react";

import { ShopContext } from "../context/shopContext";

export const HomePage = () => {
  //desctructure shopcontext, want all products on the homepage
  const { fetchAllProducts, products } = useContext(ShopContext);

  //renders all the products, function comes from shopcontext
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  // console.log(products);

  //no products then return loading
  if (!products) return <div>Loading....</div>;

  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)">
        {products.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box _hover={{ opacity: "80%" }} textAlign="center">
              <Image src={product.images[0].src} />
              <Text>{product.title}</Text>
              <Text>${product.variants[0].price}</Text>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};
