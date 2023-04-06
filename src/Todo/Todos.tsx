import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";
import axios from "axios";

// Demo data
const Todos = (props: any) => {
  const [taskList, setTaskList] = useState(
    // {
    //   id: 1,
    //   title: "Task 1",
    //   description: "This is task 1",
    //   status: "created",
    //   createdAt: "14-12-2020",
    // },
    // {
    //   id: 2,
    //   title: "Task 2",
    //   description: "This is task 2",
    //   status: "created",
    //   createdAt: "15-12-2020",
    // },
    // {
    //   id: 3,
    //   title: "Task 3",
    //   description: "This is task 3",
    //   status: "created",
    //   createdAt: "16-12-2020",
    // },
    // {
    //   id: 4,
    //   title: "Task 4",
    //   description: "This is task 4",
    //   status: "ongoing",
    //   createdAt: "17-12-2020",
    // },
    // {
    //   id: 5,
    //   title: "Task 5",
    //   description: "This is task 5",
    //   status: "ongoing",
    //   createdAt: "18-12-2020",
    // },
    // {
    //   id: 6,
    //   title: "Task 6",
    //   description: "This is task 6",
    //   status: "completed",
    //   createdAt: "19-12-2020",
    // },
    props.TaskData
  );

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:9091/listTasks")
  //     .then((response) => {
  //       console.log(response.data);
  //       setTaskList(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // Add Todo from form
  const addTodoHandler = (title: string, description: string) => {
    //   const newTask = {
    //     id: Math.random(),
    //     title: title,
    //     description: description,
    //     status: "created",
    //     createdAt: new Date().toLocaleDateString(),
    //   };
    //   setTaskList((prevTaskList) => {
    //     return prevTaskList.concat(newTask);
    //   });

    //* Add Task
    axios
      .post("http://localhost:9091/addTask", {
        uid: props.TaskData[0].uid,
        title: title,
        description: description,
        status: "created",
        createdAt: new Date().toLocaleDateString(),
      })
      .then((response) => {
        console.log(response.data);
        setTaskList((prevTaskList: any) => {
          return prevTaskList.concat(response.data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeStatusHandler = (props: any) => {
    // const newTaskList = taskList.map((task) => {
    //   if (task.id === id) {
    //     if (task.status === "created") {
    //       return { ...task, status: "ongoing" };
    //     } else if (task.status === "ongoing") {
    //       return { ...task, status: "completed" };
    //     }
    //   }
    //   return task;
    // });
    // setTaskList(newTaskList);
    // let newStatus = {};
    // if (props.status === "created") {
    //   newStatus = { status: "ongoing" };
    // } else if (props.status === "ongoing") {
    //   newStatus = { status: "completed" };
    // }

    // axios
    //   .put(`http://localhost:9091/editTask/${props.id}`, newStatus)
    //   .then((response) => {
    //     console.log(response.data);
    //     const newTaskList: any = taskList.map((task) => {
    //       if (task["id"] === props.id) {
    //         return response.data;
    //       }
    //       return task;
    //     });
    //     setTaskList(newTaskList);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    //* Uncomment from here
    let newSatus = "";
    if (props.status === "created") {
      newSatus = "ongoing";
    } else if (props.status === "ongoing") {
      newSatus = "completed";
    }

    axios
      .put(`http://localhost:9091/editTask/${props.id}`, {
        status: newSatus,
      })
      .then((response) => {
        console.log(response.data);
        const newTaskList: any = taskList.map((task: any) => {
          if (task["id"] === props.id) {
            return { ...task, status: newSatus };
          }
          return task;
        });
        setTaskList(newTaskList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //* UNCOMMENT FROM HERE
  const deleteTaskHandler = (delid: any) => {
    //   //  const newTaskList = taskList.filter((task) => task.id !== id);
    //   //  setTaskList(newTaskList);
    axios
      .delete(`http://localhost:9091/delTask/${delid}`)
      .then((response) => {
        console.log(response.data);
        setTaskList(taskList.filter((task: any) => task["id"] !== delid));
      })
      .catch((error) => {
        console.log(error);
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
            <DisplayTodo
              tasks={taskList}
              status="created"
              onButtonClick={changeStatusHandler}
              onDeleteClick={deleteTaskHandler}
            />

            {/* Add Todo Form */}
            <AddTodo onAddTodo={addTodoHandler} />
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
            {/* Display All Todo Data */}
            <DisplayTodo
              tasks={taskList}
              status="ongoing"
              onButtonClick={changeStatusHandler}
              onDeleteClick={deleteTaskHandler}
            />
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
            {/* Display All Todo Data */}
            <DisplayTodo
              tasks={taskList}
              status="completed"
              onDeleteClick={deleteTaskHandler}
            />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Todos;
