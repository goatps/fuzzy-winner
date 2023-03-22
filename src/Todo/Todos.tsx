import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";

// Demo data
const Todos = () => {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "This is task 1",
      status: "created",
      createdAt: "14-12-2020",
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is task 2",
      status: "created",
      createdAt: "15-12-2020",
    },
    {
      id: 3,
      title: "Task 3",
      description: "This is task 3",
      status: "created",
      createdAt: "16-12-2020",
    },
  ]);

// Add Todo from form
  const addTodoHandler = (title: string, description: string) => {
    const newTask = {
      id: Math.random(),
      title: title,
      description: description,
      status: "created",
      createdAt: new Date().toLocaleDateString(),
    };
    setTaskList((prevTaskList) => {
      return prevTaskList.concat(newTask);
    });
  };


  return (
    <>
      <Heading>Hi this is todos</Heading>
      <Grid
        p="1em 2em"
        display="flex"
        justifyContent="center"
        templateColumns="repeat(12, 1fr)"
        gap={4}
      >
        <GridItem colSpan={3} width="100%">
          <Box
            p="1em"
            // bg = "cyan"
            // color= "gray.700"
            bg={useColorModeValue("teal.400", "teal")}
            borderRadius="lg"
          >
            <Heading
              as="h3"
              size="sm"
              textAlign="center"
              textTransform="uppercase"
            >
              Created Task
            </Heading>

            {/* Display All Todo Data */}
            <DisplayTodo tasks={taskList} />

            {/* Add Todo Form */}
            <AddTodo onAddTodo={addTodoHandler}/>
          </Box>
        </GridItem>

        <GridItem width="100%" colSpan={3}>
          <Box
            p="1em"
            bg={useColorModeValue("red.400", "red.500")}
            borderRadius="lg"
          >
            <Heading
              as="h3"
              size="sm"
              textAlign="center"
              textTransform="uppercase"
            >
              Ongoing Task
            </Heading>
            <Box
              p="1em"
              mt="1em"
              overflow="auto"
              bg={useColorModeValue("white", "gray.700")}
              borderRadius="lg"
              // color = "black"
            >
              <Heading as="h5" size="xs">
                Task heading
              </Heading>
              <Text color={useColorModeValue("gray", "whiteAlpha.500")}>
                demo task
              </Text>
              <Divider />
              <Text fontSize="sm">Created At: DDMMYYYY HHMMSS</Text>
              <IconButton
                mt="0.5em"
                float="right"
                colorScheme="green"
                aria-label="task completed icon"
                icon={<CheckIcon />}
              />
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={3} width="100%">
          <Box
            p="1em"
            bg={useColorModeValue("green.500", "green.700")}
            borderRadius="lg"
          >
            <Heading
              as="h3"
              size="sm"
              textAlign="center"
              textTransform="uppercase"
            >
              Completed Task
            </Heading>
            <Box
              p="1em"
              mt="1em"
              overflow="auto"
              bg={useColorModeValue("white", "gray.700")}
              borderRadius="lg"
              // color = "black"
            >
              <Heading as="h5" size="xs">
                Task heading
              </Heading>
              <Text color={useColorModeValue("gray", "whiteAlpha.500")}>
                demo task
              </Text>
              <Divider />
              <Box>
                <Text fontSize="sm">Created At: DDMMYYYY HHMMSS</Text>
                <Button mt="0.5em" colorScheme="green" float="right" isDisabled>
                  Task Completed
                </Button>
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Todos;
