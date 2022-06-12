import React from 'react';

function renderButton(value) {
  return (
    <button type="button">
      {value}
    </button>
  );
}

function renderButtons() {
  return (
    <>
      {
          [1, 2, 3].map((i) => (
            renderButton(i)
          ))
      }
    </>
  );
}

function App() {
  return (
    <div>
      <p>App</p>

      {renderButtons()}
    </div>
  );
}

export default App;
