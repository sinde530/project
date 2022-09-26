import Sum from '.';

describe('<Sum/>', () => {
  it('renders Sum', () => {
    // 함수가 같은 값인지, 객체도 같은지 비교
    expect(Sum(1, 2)).toBe(3);

    // 같은 값인지 비교
    expect(Sum(2, 4)).toEqual(3);
  });
});
