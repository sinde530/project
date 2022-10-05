import styled from "@emotion/styled";

export const Container = styled.form({
  width: "400px",
  height: "300px",
  border: "1px solid lightgray",
  justifyContent: "center",
  position: "fixed",
  textAlign: "center",
  top: "50%",
  left: "50%",
  margin: "auto",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFFFFF",
});

export const LoginText = styled.p({
  marginTop: "2rem",
  marginBottom: "2rem",
  fontSize: "24px",
});

export const InputBox = styled.div({
  marginTop: "1rem",
});

export const Input = styled.input({
  padding: "16px 16px",
  width: "284px",
  height: "8px",
});

export const Box = styled.div({
  display: "grid",
  maxWidth: "310px",
  margin: "0 auto",
  textAlign: "left",
});

export const P = styled.p({
  padding: "2px",
});

export const ButtonWrapper = styled.div({
  marginTop: "1rem",
  width: "100%",
});

export const Button = styled.button({
  width: "80px",
  height: "38px",
  background: "#4263eb",
  border: "none",
  borderRadius: "8px",
  color: "#FFFFFF",
  cursor: "pointer",
});
