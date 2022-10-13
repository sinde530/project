import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './GlobalStyles';
import { darkTheme, lightTheme } from './theme';
import ThemeIcon from './components/ThemeIcon';

import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = (): void => {
    setIsDarkMode((click) => !click);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ThemeIcon isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div>
        <div />
        <h1>Vite + React</h1>
        <div className="card">
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </ThemeProvider>
  );
}

export default App;
