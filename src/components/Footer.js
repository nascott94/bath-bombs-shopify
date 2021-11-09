import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Text, Image, VStack } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box backgroundColor="#FFA8E2">
      <Grid templateColumns="repeat(3, 1fr)">
        <Image src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-5_-_trans_1.png?v=1610123549" />
        <VStack p="2rem"></VStack>
      </Grid>
    </Box>
  );
};
