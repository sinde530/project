import { useState } from "react";
import {
  Box,
  Button,
  ButtonWrapper,
  Container,
  Input,
  RegisterText,
} from "./styled";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };
  const handleChangePaassword = (e: any) => {
    setPassword(e.target.value);
  };
  const handleChangeConfirmPassword = (e: any) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      // eslint-disable-next-line no-alert
      alert("비밀번호와 비밀번호확인은 같아야 합니다.");
    }

    // const body = {
    //   email,
    //   name,
    //   password,
    // };
  };

  /**
   * Email
   * Name
   * Password
   * Password Confirm
   * Submit
   */

  return (
    <Container onSubmit={onSubmit}>
      <RegisterText>회원가입</RegisterText>

      <Box>
        <Input
          type="email"
          value={email}
          onChange={handleChangeEmail}
          placeholder="Email"
        />
      </Box>

      <Box>
        <Input
          type="text"
          value={name}
          onChange={handleChangeName}
          placeholder="Name"
        />
      </Box>
      <Box>
        <Input
          type="password"
          value={password}
          onChange={handleChangePaassword}
          placeholder="password"
        />
      </Box>
      <Box>
        <Input
          type="password"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          placeholder="Confirm Password"
        />
      </Box>
      <ButtonWrapper>
        <Button type="submit">Sign Up</Button>
      </ButtonWrapper>
    </Container>
  );
}
