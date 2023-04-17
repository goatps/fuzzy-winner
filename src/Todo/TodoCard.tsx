import React from "react";
import { NotAllowedIcon, EditIcon } from "@chakra-ui/icons";

import {
  Box,
  Divider,
  Heading,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import CustomButton from "../UI/CustomButton";
import EditTodo from "./EditTodo";

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

        <CustomButton
          id={props.id}
          status={props.status}
          onButtonClick={props.onButtonClick}
        ></CustomButton>
        <EditTodo
          id={props.id}
          title={props.title}
          description={props.description}
          onEditClick={props.onEditClick}
        ></EditTodo>

        <IconButton
          onClick={() => props.onDeleteClick(props.id)}
          width="50px"
          mr="0.5em"
          height="50px"
          mt="0.5em"
          float="right"
          colorScheme="red"
          aria-label="Call Segun"
          size="lg"
          icon={<NotAllowedIcon />}
        />
      </Box>
    </>
  );
}
