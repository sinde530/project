import React from 'react';

export default function TodoList({ onClick, tasks }) {
  return (
    <div>
      <input
        type="text"
        name="text"
        placeholder="할 일을 입력해라."
        onClick={onClick}
        tasks={tasks}
      />
    </div>
  );
}
