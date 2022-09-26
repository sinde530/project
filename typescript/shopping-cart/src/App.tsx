import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { postCats } from "./api/cats";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  useEffect(() => {
    postCats();
  }, []);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
