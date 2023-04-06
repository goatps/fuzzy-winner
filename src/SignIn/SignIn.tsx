import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import Todos from "../Todo/Todos";

const SignIn = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // }
  // const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // }
  const [data, setData] = useState([]);
  const [datafetch, setDatafetch] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: any) => {
    // event.preventDefault();
    // try {
    //   const response = await axios.put("http://localhost:9091/authenticate", {
    //     email: formData.email,
    //     password: formData.password,
    //   });
    //   console.log(response); // do something with the response
    // } catch (error) {
    //   console.log("ERRRORRR!!!"); // handle error response
    // }
    // };
    event.preventDefault();
    axios
      .put("http://localhost:9091/authenticate", formData)
      .then((response) => {
        console.log(response.data);
        console.log("not in if");

        if (response.data) {
          setError("");

          console.log("User is signed in successfully", response.data);
          const tasklist = response.data;
          setData(tasklist);
          setDatafetch(true);
        } else {
          console.log("inside if");
          setError("Invalid email or password");
        }

        // User is signed in successfully
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response) {
          setError(error.response.data.message);
        }
      });

    // try {
    //   const response = await axios.post("http://localhost:8080/api/signin", {
    //     email,
    //     password,
    //   });
    //   console.log(response.data); // do something with the response
    // } catch (error) {
    //   console.error(error.response.data); // handle error response
    // }
  };

  return (() => {
    if (datafetch === false) {
      return (
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg="gray.50"
          _dark={{ bg: "gray.800" }}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Sign in to your account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool{" "}
                <Link color={"blue.400"}>features</Link> ✌️
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg="gray.50"
              _dark={{ bg: "gray.800" }}
              boxShadow={"lg"}
              p={8}
            >
              {error && <div>{error}</div>}
              <Stack spacing={4}>
                <form onSubmit={handleSubmit}>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Checkbox>Remember me</Checkbox>
                      <Link color={"blue.400"}>Forgot password?</Link>
                    </Stack>
                    <Button
                      type="submit"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Sign in
                    </Button>
                  </Stack>
                </form>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      );
    } else {
      return <Todos TaskData={data} />;
    }
  })();
};

export default SignIn;
