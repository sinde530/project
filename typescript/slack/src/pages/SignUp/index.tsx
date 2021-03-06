/* eslint-disable no-console */
import { useCallback, useState } from "react";

// import { Link, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

// import axios from "axios";

import {
  Button,
  Error,
  Form,
  Header,
  Input,
  Label,
  LinkContainer,
  Success,
} from "./styles";

// qwer

export default function SignUp() {
  //   const { data, error, revalidate } = useSWR("/api/users", fetcher);

  //   const [email, setEmail] = useInput("");
  // const [email, onChangeEmail] = useState("");
  const [email, setEmail] = useState("");

  //   const [nickname, setNickname] = useInput("");
  // const [nickname, onChangeNickname] = useState("");
  const [nickname, setNickname] = useState("");

  //   const [password, setPassword] = useInput("");
  const [password, setPassword] = useState("");

  //   const [passwordCheck, setPasswordCheck] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [mismatchError, setMismatchError] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [signUpError, setSignUpError] = useState("");

  const onChangeEmail = useCallback((e: any) => {
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback(
    (e: any) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck]
  );

  const onChangeNickname = useCallback((e: any) => {
    setNickname(e.target.value);
  }, []);

  const onChangePasswordCheck = useCallback(
    (e: any) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password]
  );

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      console.log(email, nickname, password, passwordCheck, mismatchError);
      if (!mismatchError) {
        console.log("서버로 회원가입 하기");
      }
    },
    [email, nickname, password, passwordCheck, mismatchError]
  );

  //   const onSubmit = useCallback(
  //     (e: any) => {
  //       e.preventDefault();
  //       if (!mismatchError && nickname) {
  //         console.log("서버로 회원가입하기");
  //         setSignUpError("");
  //         setSignUpSuccess(false);
  //         axios
  //           .post("/api/users", {
  //             email,
  //             nickname,
  //             password,
  //           })
  //           .then((response) => {
  //             console.log(response);
  //             setSignUpSuccess(true);
  //           })
  //           .catch((error) => {
  //             console.log(error.response);
  //             setSignUpError(error.response.data);
  //           })
  //           .finally(() => {});
  //       }
  //     },
  //     [email, nickname, password, passwordCheck, mismatchError]
  //   );

  //   if (data === undefined) {
  //     return <div>로딩중...</div>;
  //   }

  //   if (data) {
  //     return <Redirect to="/workspace/sleact/channel/일반" />;
  //   }

  return (
    <div>
      <Header>Sign Up</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChangeEmail}
            />
          </div>
        </Label>

        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input
              type="text"
              id="nickname"
              name="nickname"
              value={nickname}
              onChange={onChangeNickname}
            />
          </div>
        </Label>

        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
        </Label>

        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!nickname && <Error>닉네임을 입력해주세요.</Error>}
          {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && (
            <Success>회원가입되었습니다! 로그인해주세요.</Success>
          )}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요? &nbsp;
        <Link to="/login">로그인 하러가기</Link>
      </LinkContainer>
    </div>
  );
}
