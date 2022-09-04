import styled from "@emotion/styled";

const Container = styled.div({
  width: "100%",
  height: "100%",
});

const Header = styled.header({
  backgroundColor: "green",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

const Logo = styled.h2({
  padding: "16px 16px",
  display: "flex",
});

const Ul = styled.ul({
  display: "flex",
});

const Li = styled.li({
  padding: "16px 16px",
  listStyle: "none",
  lineHeight: "2.3",
});

export default function App() {
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
          <Li>login</Li>
        </Ul>
      </Header>
      <section>???</section>
    </Container>
  );
}
