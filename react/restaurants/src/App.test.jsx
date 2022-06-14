import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Components Renders', () => {
    const { container } = render((
      <App />
    ));

    expect(container).toHaveTextContent('To Do List');
  });
});
