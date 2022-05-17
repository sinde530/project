const Calculator = require('./calculator');

describe('Calculator', () => {
  // `cal` 변수 선언을 함.
  let cal;
  // beforeEach로 cal을 테스트들이 각각 실행될때 호출해줌.
  beforeEach(() => {
    // cal = 새로운 Calulator를 가져온다.
    cal = new Calculator();
  });

  //test / it: 테스트 하나를 작성할 때 사용하는 키워드이다.
  it('inits with 0', () => {
    // expect로 cal의 값은 toBe(0)이다.
    expect(cal.value).toBe(0);
  });

  it('sets "값이 9라면"', () => {
    // cal.set 말그대로 cal의 값을 9로 가져온다.
    cal.set(9);
    // expect로 cal의 값은 (9)이다
    expect(cal.value).toBe(9);
  });

  it('clear', () => {
    // cal의 값은 9
    cal.set(9);
    // clear 를 가져와 값을 0으로 만든다.
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('subtrack "9 - 10이라면"', () => {
    cal.set(9);
    cal.subtrack(10);
    expect(cal.value).toBe(-1);
  });

  it('multiply "5 * 5 이라면"', () => {
    cal.set(5);
    cal.multiply(5);
    expect(cal.value).toBe(25);
  });

  it('divide "2 / 10 이라면 "', () => {
    cal.set(2);
    cal.divide(10);
    expect(cal.value).toBe(0.2);
  });
});

// beforeEach = 각각 테스트코드들이 실행하기 전에 실행됨
// afterEach = 함수가 수행이 된다음에 호출이 됨.
