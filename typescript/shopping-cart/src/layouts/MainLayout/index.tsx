import styled from "@emotion/styled";

import { Outlet } from "react-router-dom";

import Header from "src/layouts/Header";
import Footer from "src/layouts/Footer";

const Box = styled.div({
  minHeight: "calc(100vh - 42px)",
  background: "#f7f8f8",
});

export default function MainLayout() {
  return (
    <>
      <Header />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
