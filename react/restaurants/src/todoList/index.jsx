import React from 'react';
import List from './List';
import TodoInsert from './TodoInsert';

/**
 * 뼈대 템플릿 컴포넌트
 * 텍스트 적을수 있는 공간 컴포넌트
 * 입력 버튼 컴포넌트
 * 메시지 포스트에 전달 시키는 컴포넌트
 * 삭제 버튼 컴포넌트
 */

function handleClickText() {
  //
}

const tasks = [
  { id: 1, title: '아무 것도 하지 않기. #1' },
  { id: 2, title: '아무 것도 하지 않기. #2' },
];

export default function TodoList() {
  return (
    <div>
      <h2>To Do List</h2>
      <div>
        <TodoInsert
          onClick={handleClickText}
          tasks={tasks}
        />
      </div>
      <List
        tasks={tasks}
      />
    </div>

  );
}
