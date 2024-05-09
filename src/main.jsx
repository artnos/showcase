import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Tct2024Register from "./pages/Tct2024Register"
import Test from "./pages/Test.jsx"
import Tct2024 from "./pages/Tct2024.jsx"
import Faculty from "./pages/Faculty.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/tct-register",
        element: <Tct2024Register />,
    },
    {
        path: "/tct-home",
        element: <Tct2024 />,
    },
    {
        path: "/faculty",
        element: <Faculty />,
    },
    {
        path: "/test",
        element: <Test />,
    },
])

const theme = {
    colorPalette: {
        purple: "#511c74",
        red: "#ee3c2d",
    },
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider theme={extendTheme(theme)}>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>,
)
