import { Container, StyledTetris } from "./App.styled";

export default function App() {
  return (
    <Container role="button" tabIndex={0}>
      <StyledTetris>Start</StyledTetris>
    </Container>
  );
}
