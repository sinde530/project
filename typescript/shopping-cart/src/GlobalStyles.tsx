import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset}

  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.color};
    margin: 0;
    font-family: Nanum Gothic, sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
  }

  section {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.color};

    p{
      color: ${(props) => props.theme.color};
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ol, ul {
    list-style: none;
  }
  
  blockquote, q {
    quotes: none;
  }
  
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  a { 
    color: initial;
    text-decoration: none;
  }
  
  img {
    width: 100%;
  }
`;
