import React from "react";
import { ArrowRightIcon } from "@chakra-ui/icons";

import {
  Box,
  Divider,
  Heading,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function TodoCard(props: any) {
  return (
    <>
      <Box
        p="1em"
        mt="1em"
        overflow="auto"
        bg={useColorModeValue("white", "gray.700")}
        borderRadius="lg"
        // color = "black"
      >
        <Heading as="h5" size="xs">
          {props.title}
        </Heading>
        <Text color={useColorModeValue("gray", "whiteAlpha.500")}>
          {props.description}
        </Text>
        <Divider />
        <Text fontSize="sm">{props.createdAt}</Text>
        <IconButton
          mt="0.5em"
          colorScheme="red"
          float="right"
          color={useColorModeValue("white", "black")}
          bg={useColorModeValue("red.400", "red.500")}
          aria-label="task completed icon"
          icon={<ArrowRightIcon />}
        />
      </Box>
    </>
  );
}
