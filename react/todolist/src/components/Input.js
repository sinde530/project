import React from 'react';

export default function Input({ value, onChange, onClick }) {
  return (
    <div>
      <input type="text" placeholder="input" value={value} onChange={onChange} />
      <button type="button" onClick={onClick}>
        Submit
      </button>
    </div>
  );
}
