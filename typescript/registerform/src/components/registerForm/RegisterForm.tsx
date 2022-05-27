import { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useInput("");
  const [nickName, setNickName] = useInput("");

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label id="email-label">
          <span>이메일 주소</span>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChangeEmail}
          />
        </label>
        <label id="password-label">
          <span>비밀번호</span>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChangePassword}
          />
        </label>
        <label id="password-check-label">
          <span>비밀번호 확인</span>
          <input
            type="password"
            id="password-check"
            name="password-check"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          />
        </label>
        <label id="nickname-label">
          <span>닉네임</span>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={nickName}
            onChange={onChangeNickname}
          />
          <button type="submit">회원가입</button>
        </label>
      </form>
    </div>
  );
}
