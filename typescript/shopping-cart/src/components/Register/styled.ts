import styled from "@emotion/styled";

export const Container = styled.form({
  width: "400px",
  // height: "300px",
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

export const RegisterText = styled.p({
  marginTop: "2rem",
  marginBottom: "2rem",
  fontSize: "24px",
});

export const Box = styled.div({
  padding: "10px 16px",
});

export const InputBox = styled.div({
  marginTop: "1rem",
});

export const Input = styled.input({
  padding: "16px 16px",
  width: "284px",
  height: "8px",
});

// export const Box = styled.div({
//   display: "grid",
//   maxWidth: "310px",
//   margin: "0 auto",
//   textAlign: "left",
// });

export const P = styled.p({
  padding: "2px",
});

export const ButtonWrapper = styled.div({
  margin: "16px",
});

export const Button = styled.button({
  width: "90px",
  height: "38px",
  background: "cadetblue",
  border: "1px solid #FFFFFF",
  borderRadius: "12px",
  color: "#FFFFFF",
  cursor: "pointer",
});

export const ErrorMessage = styled.div({
  color: "#e01e5a",
  // margin: "8px 0 16px",
  margin: "0 0 16px",
  fontWeight: "bold",
  textAlign: "left",
  paddingLeft: "3rem",
});

export const SuccessMessage = styled.div({
  color: "#2eb67d",
  fontWeight: "bold",
});
