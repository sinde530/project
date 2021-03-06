import styled, { createGlobalStyle } from "styled-components";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const Rootdiv = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
  body{
    padding : 0;
    margin : 0;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Rootdiv>
        <TodoForm />
        <TodoList />
      </Rootdiv>
    </>
  );
}
