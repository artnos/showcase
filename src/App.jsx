import { useState } from 'react'
import './App.css'
import {Link} from "react-router-dom";
import {Box} from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box display={"flex"} gap={"20px"}>
          <Link to={"tct-register"}>TCT register</Link>
          <Link to={"tct-home"}>TCT Home</Link>
          <Link to={"faculty"}>Faculty</Link>
      </Box>
    </>
  )
}

export default App
