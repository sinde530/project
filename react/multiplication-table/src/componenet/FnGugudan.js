import React, { useRef, useState } from 'react';

function FnGugudan() {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const input = useRef(null);

  const handleChangeNumber = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (first * second === parseInt(value)) {
      setResult(value + ' Correct');
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      input.current.focus();
    } else {
      setResult(value + ' Wrong');
      setValue('');
      input.current.focus();
    }
  };

  console.log('Rendering');
  return (
    <div>
      <h1>
        {first} * {second} = ?
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="number" onChange={handleChangeNumber} value={value} />
        <button type="submit">submit</button>
      </form>
      <div>{result}</div>
    </div>
  );
}

export default FnGugudan;
