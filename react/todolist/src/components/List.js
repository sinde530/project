import React from 'react';
import Item from './Item';

export default function List({ tasks, onClickDelete }) {
  return (
    //   순서가있는 아이템
    <ol>
      {tasks.map((task) => (
        <Item key={task.id} task={task} onClickDelete={onClickDelete} />
      ))}
    </ol>
  );
}
