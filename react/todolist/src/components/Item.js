import React from 'react';

function Item({ task: { id, title }, onClickDelete }) {
  return (
    <li>
      {title}
      <button type="button" onClick={() => onClickDelete(id)}>
        Remove
      </button>
    </li>
  );
}

export default Item;
