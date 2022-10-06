import styled from "@emotion/styled";

import { Link } from "react-router-dom";

const Ul = styled.ul({
  marginLeft: "auto",
  display: "flex",
});

const Li = styled.li({
  padding: "16px 16px",
});

export default function ListItem() {
  return (
    <Ul>
      <Li>
        <Link to="/">Text 1</Link>
      </Li>
      <Li>
        <Link to="/">Text 2</Link>
      </Li>
      <Li>
        <Link to="/">Text 3</Link>
      </Li>
      <Li>
        <Link to="/">Text 4</Link>
      </Li>
    </Ul>
  );
}
