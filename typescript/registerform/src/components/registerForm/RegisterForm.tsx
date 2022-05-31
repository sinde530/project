/**
 * 필요한 기능
 * 이메일
 * 닉네임
 * 비밀번호
 * 비밀번호 확인
 * 회원가입
 * 로그인 하로 가기
 *
 * 에러메시지
 * 비밀번호
 * 닉네임
 * 회원가입
 * 회원가입 => 로그인 가능 (메시지)
 */

import { useCallback, useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useInput("");
  const [nickname, setNickname] = useInput("");
  // email, nickname custom hook remove()
  const [password, setPassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useInput("");
  const [mismatchError, setMismatchError] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const onChangePassword = useCallback(
    (e: string) => {
      setPassword(e.terget.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck]
  );

  return (
    <div>
      <form>
        <h2>RegisterForm</h2>
        <div>
          <span>Email</span>
          <input type="email" id="email" name="email" value={email} />
        </div>
        <div>
          <span>NickName</span>
          <input type="text" id="nickname" name="nickname" value={nickname} />
        </div>
        <div>
          <span>PassWord</span>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <div>
          <span>Re - PassWord</span>
          <input
            type="password"
            id="password-check"
            name="password-check"
            value={passwordCheck}
          />
        </div>
      </form>
    </div>
  );
}
