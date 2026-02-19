import { useState } from "react"
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  const [username, setUsername] = useState<string>("");

  return (
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
    </Routes>
  )
}

export default App
