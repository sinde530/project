import React, { useState } from "react";

import styled from "styled-components";

const Form = styled.form`
  display: flex;
  width: 100%;
  height: 10%;
  align-item: center;
  justify-content: center;
`;

export default function TodoForm() {
  const [value, setValue] = useState("");

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 새 항복 생성하기
    setValue("");
  };

  return (
    <div>
      <Form onSubmit={handleClick}>
        <input
          value={value}
          placeholder="할 일을 작성해 주세요."
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">등록</button>
      </Form>
    </div>
  );
}
