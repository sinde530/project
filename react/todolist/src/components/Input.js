import React from 'react';

export default function Input({ onClick }) {
  return (
    <div>
      <p>input</p>
      <input type="text" placeholder="input" />
      <button type="button" onClick={onClick}>
        Submit
      </button>
    </div>
  );
}
