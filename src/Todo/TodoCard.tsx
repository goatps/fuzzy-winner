import React from "react";
import { ArrowRightIcon, CheckIcon } from "@chakra-ui/icons";

import {
  Box,
  Button,
  Divider,
  Heading,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";



export default function TodoCard(props: any) {
  const icon = props.status === 'ongoing'? <CheckIcon /> : <ArrowRightIcon />;
  const checkColor = useColorModeValue("green.400", "green.500"); 
  const arrowColor = useColorModeValue("red.400", "red.500");
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
        {props.status!== "completed"?
          (<IconButton
            mt="0.5em"
            colorScheme={props.status === "ongoing"?"green": "red"}
            float="right"
            id={props.id}
            // color={useColorModeValue("white", "black")}
            bg={props.status === "created"? arrowColor: checkColor}
            aria-label="task completed icon"
            icon={ icon }
          />)
          :
          <Button
            isDisabled
            float="right"
            colorScheme= "green"
          >
            Task Completed
          </Button>
        }
      </Box>
    </>
  );
}
