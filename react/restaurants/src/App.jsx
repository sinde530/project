import React, { useState } from 'react';

function Counter({ count, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
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

function Page({ count, onClick }) {
  return (
    <Counter
      count={count}
      onClick={onClick}
    />
  );
}

function App() {
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
    <div>
      <p>App</p>
      <Page
        count={count}
        onClick={handleClick}
      />
      <Buttons />
    </div>
  );
}

export default App;
