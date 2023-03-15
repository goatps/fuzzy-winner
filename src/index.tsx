// import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import * as serviceWorker from "./serviceWorker"
import Signup from "./SignUp/SignUp";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./SignIn/SignIn";

// Creating a router to handle the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Sign-Up",
    element: <Signup />,
  },
  {
    path: "/Sign-In",
    element: <SignIn />,
  },
]);

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    {/* <ColorModeScript /> */}

    {/* Adding ChakraUI by wrapping the whole app in ChakraProvider */}
    <ChakraProvider theme={theme}>
    <Navbar />
    <RouterProvider router={router}/>
  </ChakraProvider>
    {/* <Navbar /> */}
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
