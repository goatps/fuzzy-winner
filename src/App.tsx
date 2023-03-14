import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Navbar from "./components/Navbar/Navbar"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
  </ChakraProvider>
)
