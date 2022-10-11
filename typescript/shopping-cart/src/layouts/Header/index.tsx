import styled from "@emotion/styled";

import Logo from "./Logo";
import ListItem from "./ListItem";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import Search from "./Search";

const Container = styled.div({
  width: "100%",
  height: "64px",
  position: "sticky",
  display: "flex",
  alignItems: "center",
  top: 0,
  left: 0,
  background: "#FFF",
  zIndex: "999",
});

export default function Header() {
  return (
    <Container>
      <Logo />
      <Search />
      <ListItem />
      <LoginButton />
      <RegisterButton />
    </Container>
  );
}
