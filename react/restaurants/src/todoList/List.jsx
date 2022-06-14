import React from 'react';

import Item from './Item';

export default function List({ isEmpty, todos, onClick }) {
  if (isEmpty(todos)) {
    return (
      <p>할 일이 없어요!</p>
    );
  }

  return (
    <ol>
      {
        todos.map(({ id, text }) => (
          <Item
            key={id}
            id={id}
            text={text}
            onClick={() => onClick(id)}
          />
        ))
      }
    </ol>
  );
}
