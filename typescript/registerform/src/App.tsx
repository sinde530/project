import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Login />
    </>
  );
}
