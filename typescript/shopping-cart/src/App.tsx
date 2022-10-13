import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "./GlobalStyles";
import { darkTheme, lightTheme } from "./theme";
import ThemeIcon from "./components/ThemeIcon";

import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./pages/404/index";

import MainLayout from "./layouts/MainLayout";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = (): void => {
    setIsDarkMode((click) => !click);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ThemeIcon isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
