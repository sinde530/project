import { fireEvent, render, screen } from '@testing-library/react';

import ThemeIcon from './index';

const toggleDarkMode = () => {};

describe('<ThemeIcon/>', () => {
  it('renders Component', () => {
    render(
      <ThemeIcon isDarkMode={false} toggleDarkMode={() => toggleDarkMode()} />,
    );

    fireEvent.click(screen.getByRole('button'));
  });
});
