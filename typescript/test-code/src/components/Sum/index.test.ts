import Sum from '.';

describe('<Sum/>', () => {
  it('renders Sum', () => {
    // 함수가 같은 값인지, 객체도 같은지 비교
    expect(Sum(1, 2)).toBe(3);

    // 같은 값인지 비교
    expect(Sum(2, 4)).toEqual(6);

    // undefine가 포함되어 있으면 실패로 처리한다.
    expect(Sum(3, 6)).toStrictEqual(9);
  });

  it('object assigment', () => {
    // object test
    // 객체의 값을 확인할때 사용
    const data = { one: 1 };
    data.two = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });
});

describe('adding positive numbers', () => {
  it('Value match', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        // 테스트 방식이 1이 10번 돌아가는거라 a나 b는 결과값이 1로만 나온다.
        expect(a + b).toBe(2);
      }
    }
  });
  it('Value mismatch', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });
});
