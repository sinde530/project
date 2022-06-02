import { Routes, Route } from "react-router-dom";

import loadable from "@loadable/component";

const Login = loadable(() => import("./pages/Login"));
const SignUp = loadable(() => import("./pages/SignUp"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
