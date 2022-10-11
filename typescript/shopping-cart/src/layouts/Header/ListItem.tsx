import styled from "@emotion/styled";

import { Link } from "react-router-dom";

const Ul = styled.ul({
  // marginLeft: "auto",
  display: "flex",
});

const Li = styled.li({
  padding: "16px 16px",
});

export default function ListItem() {
  return (
    <Ul>
      <Li>
        <Link to="/">TOP</Link>
      </Li>
      <Li>
        <Link to="/">SHIRTS</Link>
      </Li>
      <Li>
        <Link to="/">PANTS</Link>
      </Li>
      <Li>
        <Link to="/">OUTER</Link>
      </Li>
      <Li>
        <Link to="/">ACC/BAG</Link>
      </Li>
    </Ul>
  );
}
