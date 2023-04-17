import * as React from "react";
import { Heading, Link, Button, Flex, Text } from "@chakra-ui/react";
// import Navbar from "./components/Navbar/Navbar"

export const App = () => {
  return (
    <>
      <Heading mt={10} as="h1" textAlign="center">
        Welcome to FocusFlow
      </Heading>
      <Text fontSize='xl' m={10} textAlign="justify">
        Introducing our FocusFlow App - the perfect solution to managing your
        tasks efficiently. Our app is designed to help you keep track of all
        your tasks, deadlines, and priorities in one place. Whether you're a
        busy professional, a student, or a homemaker, our app is the ideal tool
        to help you stay on top of your tasks and achieve your goals. With a
        user-friendly interface and powerful features, our app is the perfect
        way to manage your tasks and improve your productivity. Say goodbye to
        missed deadlines and forgotten tasks - with our app, you'll never miss a
        beat.
      </Text>
      <Flex justify="center">
        <Link
          mr={4}
          display="block"
          href="/sign-up"
          textDecoration="none"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button w="2xs" mt="1em" display="block" colorScheme="teal">
            Sign Up
          </Button>
        </Link>
        <Link
          display="block"
          href="/sign-in"
          textDecoration="none"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button w="2xs" mt="1em" display="block" colorScheme="teal">
            Sign In
          </Button>
        </Link>
      </Flex>
    </>
  );
};
