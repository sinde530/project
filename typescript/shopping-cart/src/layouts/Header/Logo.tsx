import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div({
  padding: "16px 16px",
});

export default function Logo() {
  return (
    <Container>
      <Link to="/">
        <p>Logo</p>
      </Link>
    </Container>
  );
}
