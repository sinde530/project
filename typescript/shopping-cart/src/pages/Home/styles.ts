import styled from "@emotion/styled";

export const Container = styled.div({
  width: "100%",
  height: "100%",
});

export const Section = styled.section({
  textAlign: "-webkit-left",
  margin: "0 auto",

  "@media(max-width: 1400px)": {
    textAlign: "center",
  },
});

export const Title = styled.h1({
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center",
  paddingBottom: "1rem",
});

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
});

export const Description = styled.p({
  fontWeight: "300",
  fontSize: "16px",
  lineHeight: "23px",
});

export const Price = styled.p({
  fontWeight: "500",
  lineHeight: "19px",
  fontSize: "18px",
});
