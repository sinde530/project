import React from 'react';

export default function Item({ text, onClick }) {
  return (
    <li>
      {text}
      <button
        type="button"
        onClick={onClick}
      >
        완료
      </button>
    </li>
  );
}
