import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((counterUp) => counterUp + 1);
  };

  return (
    <div>
      value :
      {counter}

      <button
        type="button"
        onClick={increment}
      >
        increment
      </button>
    </div>
  );
}

export default Counter;
