import React from 'react';

function Event() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Click me');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Activate Lasers</button>
      </form>
    </div>
  );
}

export default Event;
