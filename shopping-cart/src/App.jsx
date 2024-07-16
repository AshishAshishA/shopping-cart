import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Header from "./components/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path={"/"} element={<Home />} />

        <Route path={"/cart"} element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
