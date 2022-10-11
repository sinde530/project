import styled from "@emotion/styled";

export const CardBox = styled.div({
  display: "inline-block",
  width: "344px",
  padding: "8px",

  "@media(max-width:720px)": {
    width: "159px",
  },
});

export const Image = styled.img({
  width: "100%",
  borderRadius: "10px",
  overflow: "hidden",
});

export const TextBox = styled.div({
  marginTop: "7px",
  textAlign: "left",
});

export const Description = styled.p({
  fontWeight: "300",
  fontSize: "16px",
  margin: "8px",
});

export const Price = styled.p({
  fontWeight: "500",
  lineHeight: "19px",
  fontSize: "18px",
  margin: "8px",
});
