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

const inititalState = 0;

function render(count) {
  const Numbers = [1, 2, 3];

  function handleClick() {
    render(count + 1);
  }

  function handleClickNumber(value) {
    if (Number.isNaN(Number(value))) {
      return false;
    }
    return render(value);
  }

  const element = (
    <div>
      <p>Hello, World!</p>

      <button type="button" onClick={handleClick}>
        Click Me! (
        {count}
        )
      </button>

      <p>
        {Numbers.map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );

  // DSL = domain specific language

  // appendChild는 Node 객체만 받을수 있다.
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render(inititalState);
