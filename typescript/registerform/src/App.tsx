import { Routes, Route, Outlet } from "react-router-dom";

import { RecoilRoot } from "recoil";

import Login from "./components/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function Layout() {
  return (
    <RecoilRoot>
      <Outlet />
    </RecoilRoot>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Login />
    </>
  );
}
