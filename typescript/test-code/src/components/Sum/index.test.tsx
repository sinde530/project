import Sum from '.';

describe('<Sum/>', () => {
  it('renders Sum', () => {
    expect(Sum(1, 2)).toBe(3);
  });
});
