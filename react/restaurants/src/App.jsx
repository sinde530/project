import React from 'react';

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
      <Buttons />
    </div>
  );
}

export default App;
