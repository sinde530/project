import { useState } from "react";

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
    <div>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={handleChangeEmail} />

        <label>Name</label>
        <input type="text" value={name} onChange={handleChangeName} />

        <label>password</label>
        <input
          type="password"
          value={password}
          onChange={handleChangePaassword}
        />

        <label>confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
