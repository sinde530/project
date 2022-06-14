import App from './App';

describe('App', () => {
  it('Components Renders', () => {
    const { container } = render((
      <App />
    ));
  });
});
