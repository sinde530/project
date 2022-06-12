import React, { useState } from 'react';

function Counter() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      Click Me!
      (
      {count}
      )
    </button>
  );
}

function Button({ children }) {
  return (
    <button type="button">
      {children}
    </button>
  );
}

function Buttons() {
  return (
    <>
      {
          [1, 2, 3].map((i) => (
            <Button key={i}>
              {i}
            </Button>
          ))
      }
    </>
  );
}

function App() {
  return (
    <div>
      <p>App</p>
      <Counter />
      <Buttons />
    </div>
  );
}

export default App;
