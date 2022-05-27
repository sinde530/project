import styled, { createGlobalStyle } from "styled-components";

const Rootdiv = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-decoration: column;
`;

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Rootdiv>
        <p>App.page</p>
      </Rootdiv>
    </>
  );
}
