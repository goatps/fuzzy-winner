import * as React from "react"
import {
  Heading,
  Link,
  Button,
  Flex,
} from "@chakra-ui/react"
// import Navbar from "./components/Navbar/Navbar"

export const App = () => {
  return (
    <>
      <Heading
        textAlign="center"
      >
        Welcome to FocusFlow
      </Heading>
      <Flex
        justify="center"
      >
        <Link
          display="block"
          href="/sign-up"
          textDecoration= "none"
          _hover={{
            textDecoration: "none"
          }}        
        >
          <Button
            w = "2xs"
            mt = "1em"
            display="block"
            colorScheme= "teal"
          >
              SignUp
          </Button>
        </Link>
        <Link
          display="block"
          href="/sign-in"
          textDecoration= "none"
          _hover={{
            textDecoration: "none"
          }}        
        >
          <Button
            w = "2xs"
            mt = "1em"
            display="block"
            colorScheme= "teal"
          >
              Sign In
          </Button>
        </Link>
      </Flex>
    </>
  );
};
