import Greeting from "./components/Greeting";

import "./App.css";

export default function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return (
    <div className="App">
      <Greeting name="crong" mark="!" onClick={onClick} />
    </div>
  );
}
