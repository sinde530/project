/**
 * 필요한 기능
 * - form ( input, button)
 * - input (email, pw )
 * - button
 */

import React, { ReactElement } from "react";

interface LoginFormInfo {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    console.log("go home");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          handleChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          handleChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
}
