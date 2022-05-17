const add = require('./add');

// test라는 함수에 원하는 내용을 작성
test('adds, 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
