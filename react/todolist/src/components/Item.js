import React from 'react';

function Item({ task: { id, title } }) {
  return (
    <li>
      {id}-{title}
    </li>
  );
}

export default Item;
