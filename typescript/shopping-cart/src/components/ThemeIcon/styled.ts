import styled from "styled-components";

export const IconBox = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  justify-content: center;
`;

export const Icon = styled.button`
  border: none;
  border-radius: 50%;
  box-shadow: 0 5px 25px rgb(0 0 0 / 12%);
  background-color: #363f47;
  width: 50px;
  height: 50px;
  padding: 8px;
  cursor: pointer;
  color: #fff;

  svg {
    color: #fff;
    width: 1em;
    height: 1em;
    // font-size: 2.2rem;
    font-size: 2rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;
