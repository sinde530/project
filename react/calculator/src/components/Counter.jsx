import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  const Increase = () => {
    setNumber((prev) => prev + 1);
  };

  const Decrease = () => {
    setNumber((prev) => prev - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={Increase}>+ 1</button>
      <button onClick={Decrease}>- 1</button>
    </div>
  );
}
