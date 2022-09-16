import { Link } from "react-router-dom";

import { Container, Header, Logo, Ul, Li } from "./styles";

export default function Home() {
  const user = false;

  return (
    <Container>
      <Header>
        <Logo>Logo</Logo>
        <Ul>
          <Li>list Item1</Li>
          <Li>list Item2</Li>
          <Li>list Item3</Li>
          <Li>list Item4</Li>
          <Li>list Item5</Li>
          <Li>list Item6</Li>
          <Li>list Item7</Li>
          {user ? (
            <Li>{user}</Li>
          ) : (
            <Li>
              <Link to="/login">login</Link>
            </Li>
          )}
        </Ul>
      </Header>
      <section>???</section>
    </Container>
  );
}
