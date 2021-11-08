import React, { useContext } from "react";
import { Flex, Text, Icon, Image } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import { MdMenu, MdShoppingCart } from "react-icons/md";

export const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex flexDir="row" justifyContent="space-between" p="2rem">
      <Icon fill="white" as={MdMenu}>
        Menu
      </Icon>
      <Text>Logo</Text>
      <Text>Cart</Text>
    </Flex>
  );
};
