import React from 'react';

export default function Input({ onClick }) {
  return (
    <div>
      <input type="text" placeholder="input" />
      <button type="button" onClick={onClick}>
        Submit
      </button>
    </div>
  );
}
