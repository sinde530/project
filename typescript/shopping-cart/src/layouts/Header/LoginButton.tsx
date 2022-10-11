import styled from "@emotion/styled";

import { Link } from "react-router-dom";

const Container = styled.div({
  padding: "16px 16px",
});

export default function LoginButton() {
  return (
    <Container>
      <Link to="/login">로그인</Link>
    </Container>
  );
}
