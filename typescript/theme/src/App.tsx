import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import reactLogo from './assets/react.svg';

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
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
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
