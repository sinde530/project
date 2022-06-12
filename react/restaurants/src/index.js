function createElement(tagName, ...children) {
  const element = document.createElement(tagName);

  children.forEach((child) => {
    element.appendChild(child);
  });

  return element;
}

// DSL = domain specific language

// appendChild는 Node 객체만 받을수 있다.
document.getElementById('app').appendChild(
  createElement(
    'div',
    createElement(
      'p',
      ...[1, 2, 3].map((i) => (
        document.createTextNode(`Hello, World! ${i} | `)
      )),
      document.createTextNode('Hello, World!!'),
    ),
    createElement(
      'p',
      document.createTextNode('Sung'),
      document.createTextNode('Eun!!'),
    ),
  ),
);
