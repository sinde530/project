function createElement(tagName, children) {
  const element = document.createElement(tagName);

  element.appendChild(children[0]);
  return element;
}

const element = document.getElementById('app');

const paragraph1 = createElement('p', [
  document.createTextNode('Hello, World!!'),
]);

const paragraph2 = createElement('p', [
  document.createTextNode('Hello, World!!!!!!!!!'),
]);

// appendChild는 Node 객체만 받을수 있다.
element.appendChild(paragraph1);
element.appendChild(paragraph2);
