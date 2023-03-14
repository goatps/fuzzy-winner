import * as React from "react"
import {
  ChakraProvider,
  Heading,
  Link,
  theme,
  Button,
} from "@chakra-ui/react"
// import Navbar from "./components/Navbar/Navbar"

export const App = () => {
  return(
    <>
      <Heading>
        This is home
      </Heading>
      <Link
        href="/sign-up"
      >
        <Button>
            SignUp
        </Button>
      </Link>
      <Link
        href="/sign-in"
      >
        <Button>
            Sign In
        </Button>
      </Link>
    </>
  )
}
