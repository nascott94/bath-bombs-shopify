import React from "react";
import { Box, Flex, Button, Text, Image, Heading } from "@chakra-ui/react";

export const ImageWithText = ({ button, reverse, image, heading, text }) => {
  const reverseSection = reverse ? "row-reverse" : "row";

  return (
    <Box>
      <Flex flexDir={["column", reverseSection]} w="100%">
        <Image src={image} objectFit="cover" w={["100%", "50%"]} />
        <Box
          w={["100%", "50%"]}
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          p="2rem"
        >
          <Heading pb="2rem">{heading && heading}</Heading>
          <Text pb="2rem">{text && text}</Text>
          <Button
            w="10rem"
            backgroundColor="#FF38BD"
            color="white"
            _hover={{ opacity: "70%" }}
          >
            Buy Now
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
