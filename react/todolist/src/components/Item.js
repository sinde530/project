import React from 'react';

function Item({ task }) {
  return (
    <li>
      {task.id}
      {task.title}
    </li>
  );
}

export default Item;
