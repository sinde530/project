import { render } from '@testing-library/react';

import Sum from '.';

describe('<Sum/>', () => {
  it('renders Sum', () => {
    render(<Sum />);

    const data = { a: 1, b: 2 };

    expect(data).toEqual({ a: 1, b: 2 });
  });
});
