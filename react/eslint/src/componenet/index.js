/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension, no-unused-vars */

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

const operatorFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
};

function defaultFunction(x, y) {
  return x || y;
}

function calculator(number, operand, operator) {
  return (operatorFunction[operator] || defaultFunction)(operand, number);
}

const init = {
  number: 0,
  operand: 0,
  operator: "",
};

function render({ number, operand, operator }) {
  function handleClickNumber(value) {
    render({
      number,
      operand: operand * 10 + value,
      operator,
    });
  }

  function handleCilckOperator(value) {
    render({
      number: calculator(number, operand, operator),
      operand: "",
      operator: "",
    });
  }
  console.log(number, "number");
  console.log(operand, "operand");

  const element = (
    <div>
      <p>간단 계산기</p>
      <p>{number || operand}</p>
      <p>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
      <p>
        {["+", "-", "*", "/", "="].map((i) => (
          <button type="button" onClick={() => handleCilckOperator(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );

  document.getElementById("app").textContent = "";
  document.getElementById("app").appendChild(element);
}

render(init);
