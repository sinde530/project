import { render, screen } from '@testing-library/react';

import App from './App';

describe('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Remove/i);
  expect(linkElement).toBeInTheDocument();
});
