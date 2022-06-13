import React from 'react';

import Button from './Button';

function CounterButton({ count, onClick }) {
  return (
    <div>
      <Button
        type="button"
        onClick={onClick}
      >
        Click me
        (
        {count}
        )
      </Button>
    </div>
  );
}

export default CounterButton;
