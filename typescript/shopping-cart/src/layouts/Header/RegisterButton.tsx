import styled from "@emotion/styled";

import { Link } from "react-router-dom";

const Container = styled.div({
  padding: "16px 16px",
});

export default function RegisterButton() {
  return (
    <Container>
      <Link to="/register">회원가입</Link>
    </Container>
  );
}
