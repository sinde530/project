import GoogleLogin from "react-google-login";
import {
  Button,
  ButtonWrapper,
  Container,
  Input,
  InputBox,
  LoginText,
} from "./styled";

export default function Login() {
  const failedGoogle = (res: any) => {
    console.error(res);
  };

  const successLogin = () => {
    alert("성공");
  };

  return (
    <Container>
      <LoginText>로그인</LoginText>
      <InputBox>
        <GoogleLogin
          clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
          buttonText="구글로 계속하기"
          onSuccess={successLogin}
          onFailure={failedGoogle}
        />
        <Input type="email" placeholder="아이디" />
      </InputBox>
      <InputBox>
        <Input type="password" placeholder="비밀번호" />
      </InputBox>
      <ButtonWrapper>
        <Button type="submit">로그인</Button>
      </ButtonWrapper>
    </Container>
  );
}
