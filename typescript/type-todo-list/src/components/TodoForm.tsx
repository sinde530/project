import React, { useState } from "react";

import styled from "styled-components";

const Form = styled.form`
  display: flex;
  width: 80%;
  height: 10%;
  align-item: center;
  justify-content: center;
  padding-bottom: 1rem;
`;

const Input = styled.input`
  display: flex;
  width: 50%;
  height: 34px;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
`;

const ButtonSave = styled.button`
  display: flex;
  width: 10%;
  height: 40px;
  outline: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
`;

export default function TodoForm() {
  const [value, setValue] = useState("");

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 새 항복 생성하기
    setValue("");
  };

  return (
    <Form onSubmit={handleClick}>
      <Input
        value={value}
        placeholder="할 일을 작성해 주세요."
        onChange={(e) => setValue(e.target.value)}
      />
      <ButtonSave type="submit">등록</ButtonSave>
    </Form>
  );
}
