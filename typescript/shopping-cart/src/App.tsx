import { Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./pages/404/index";

import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
