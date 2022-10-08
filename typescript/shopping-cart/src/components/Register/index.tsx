import { useCallback, useState } from "react";
// import { createUser } from "src/api/users";
import {
  Box,
  Button,
  ButtonWrapper,
  Container,
  ErrorMessage,
  Input,
  RegisterText,
} from "./styled";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [mismatchError, setMismatchError] = useState<boolean>(false);

  const handleChangeEmail = useCallback((e: any) => {
    // const emailRegex =
    //   /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    setEmail(e.target.value);
  }, []);
  const handleChangeName = useCallback((e: any) => {
    setName(e.target.value);
  }, []);
  const handleChangePaassword = useCallback(
    (e: any) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== confirmPassword);
    },
    [confirmPassword]
  );
  const handleChangeConfirmPassword = useCallback(
    (e: any) => {
      setConfirmPassword(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password]
  );

  const onSubmit = useCallback(async (e: any) => {
    e.preventDefault();

    // await createUser({ email, name, password })
    //   .then(({ userData }) => {
    //     console.log(userData);
    //     alert("성공");
    //     return userData;
    //   })
    //   .catch(() => {
    //     alert("실패");
    //   });
  }, []);

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
      {!name && <ErrorMessage>이름을 입력해주세요.</ErrorMessage>}

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
      {mismatchError && (
        <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
      )}

      <ButtonWrapper>
        <Button type="submit">Sign Up</Button>
      </ButtonWrapper>
    </Container>
  );
}
