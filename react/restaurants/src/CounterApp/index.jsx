import React, { useState } from 'react';

import CounterButton from './CounterButton';
import Numbers from './Numbers';

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const numbers = [1, 2, 3, 4, 5];

  function handleClick() {
    setCount(count + 1);
  }

  function handleNumbersClick(number) {
    setCount(count + number);
  }

  return (
    <div>
      <CounterButton
        count={count}
        onClick={handleClick}
      />
      <Numbers
        numbers={numbers}
        onClick={handleNumbersClick}
      />
    </div>
  );
}
