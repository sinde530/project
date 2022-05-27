import { useState } from "react";
import "./App.css";
import RegisterForm from "./components/registerForm/RegisterForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <RegisterForm />
      </div>
      <p>
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          count is: {count}
        </button>
      </p>
    </div>
  );
}

export default App;
