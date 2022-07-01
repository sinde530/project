import "./App.css";

import CharacterCounter from "./components/CharacterCounter";

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <CharacterCounter />
      </header>
    </div>
  );
}

export default App;
