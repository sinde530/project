import React from 'react';

export default function TodoInsert({ title, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={title}
        placeholder="할 일을 입력해라."
        onChange={onChange}
      />
      <button type="submit">추가</button>
    </form>
  );
}
