/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension */
/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

const operatorFunctions = {
  '': (x, y) => x || y,
  '=': (x, y) => x || y,
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  '/': (x, y) => x / y,
};

function calculate(operator, accmulator, number) {
  return operatorFunctions[operator](accmulator, number);
}

const initialState = {
  accmulator: 0,
  number: 0,
  operator: '',
};

function render({ number, operator, accmulator }) {
  const Numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 0],
  ];
  const Operator = ['+', '-', '*', '/', '='];

  function handleClickNumber(value) {
    if (Number.isNaN(Number(value))) {
      return false;
    }
    return render({
      accmulator,
      number: number * 10 + value,
      operator,
    });
  }

  function handleClickOperator(value) {
    return render({
      accmulator: calculate(operator, accmulator, number),
      number: 0,
      operator: value,
    });
  }

  function handleClickReset() {
    render(initialState);
  }

  const element = (
    <div>
      <p>
        {/* 기존에 값이 없을경우 `accmulator` 를 보여준다 */}
        {number || accmulator}
      </p>
      <p>{operator}</p>

      <p>
        {Numbers[0].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
      <p>
        {Numbers[1].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
      <p>
        {Numbers[2].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>

      <p>
        {Operator.map((i) => (
          <button type="button" onClick={() => handleClickOperator(i)}>
            {i}
          </button>
        ))}

        <button type="button" onClick={handleClickReset}>
          Reset
        </button>
      </p>
    </div>
  );

  // DSL = domain specific language

  // appendChild는 Node 객체만 받을수 있다.
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render(initialState);
