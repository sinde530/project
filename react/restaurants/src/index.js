/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key] = value;
  });

  children.forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}
const element = (
  <div id="hello" className="greeting">
    <p>Hello, World!</p>
  </div>
);
// DSL = domain specific language

// appendChild는 Node 객체만 받을수 있다.
document.getElementById('app').appendChild(element);
