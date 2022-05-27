import React from "react";

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
  };
};

function TodoItem({ todo }: TodoItemProps) {
  return (
    <div>
      <div>
        <span>{todo.id}</span>
      </div>
      <div>
        <span>{todo.text}</span>
      </div>
      <div>
        <span>삭제</span>
      </div>
    </div>
  );
}

export default TodoItem;
