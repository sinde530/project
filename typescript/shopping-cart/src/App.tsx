import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import { postCats } from "./api/cats";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  useEffect(() => {
    postCats();
  }, []);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}
