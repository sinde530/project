import React from 'react';

import Input from './Input';
import List from './List';

export default function Page({ taskTitle, onChangeTitle, onClick, tasks, onClickDelete }) {
  return (
    <div>
      <h1>To do list</h1>
      <Input value={taskTitle} onChange={onChangeTitle} onClick={onClick} />
      <List tasks={tasks} onClickDelete={onClickDelete} />
    </div>
  );
}
