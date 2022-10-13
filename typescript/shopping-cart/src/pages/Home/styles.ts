import styled from "@emotion/styled";

export const Container = styled.div({
  width: "100%",
  height: "100%",
});

export const Section = styled.section({
  textAlign: "center",
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
  paddingTop: "2rem",
});
