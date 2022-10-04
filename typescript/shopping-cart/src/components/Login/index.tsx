import {
  Box,
  Button,
  ButtonWrapper,
  Container,
  Input,
  InputBox,
  LoginText,
  P,
} from "./styled";

export default function Login() {
  return (
    <Container>
      <LoginText>로그인</LoginText>
      <InputBox>
        <Input type="email" placeholder="아이디" />
      </InputBox>
      <InputBox>
        <Input type="password" placeholder="비밀번호" />
      </InputBox>
      <Box>
        <P>
          <a href="/">비밀번호 찾기</a>
        </P>
        <P>
          <a href="/">회원가입</a>
        </P>
      </Box>
      <ButtonWrapper>
        <Button type="submit">로그인</Button>
      </ButtonWrapper>
    </Container>
  );
}
