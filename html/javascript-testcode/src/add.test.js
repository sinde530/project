const add = require('./add');

// test라는 함수에 원하는 내용을 작성
test('adds, 1 + 2 to equal 3', () => {
  // 테스트코드 작성
  expect(add(1, 2)).toBe(3);
});

// expect : expect 기능은 값을 테스트할때 주로 쓰인다
// toBe : 정확하게 이 값이여야한다.
