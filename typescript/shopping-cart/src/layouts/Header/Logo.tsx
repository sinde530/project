import styled from "@emotion/styled";

import { Link } from "react-router-dom";

const Container = styled.div({
  margin: "16px 16px",
});

const LogoText = styled.p({
  fontSize: "24px",
  fontWeight: "500",
});

export default function Logo() {
  return (
    <Container>
      <Link to="/">
        <LogoText>Modisch</LogoText>
      </Link>
    </Container>
  );
}
