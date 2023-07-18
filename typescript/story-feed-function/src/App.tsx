import './App.css';
import reactLogo from './assets/react.svg';
import Story from './components/Story';

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Story />
    </>
  );
}

export default App;
