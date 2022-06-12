import React from 'react';

function renderButtons() {
  return (
    <>
      {
          [1, 2, 3].map((i) => (
            <button type="button">
              {i}
            </button>
          ))
      }
    </>
  );
}

function App() {
  return (
    <div>
      {renderButtons()}
      <p>App</p>
      {
          [1, 2, 3].map((i) => (
            <button type="button">{i}</button>
          ))
      }
    </div>
  );
}

export default App;
