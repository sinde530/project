import './App.css';
import Hello from './componenet/ConditionalRendering/Hello';
import RegisterForm from './componenet/RegisterForm';


function App() {
  return (
    <div className="App">
      <RegisterForm />
      <Hello name="Crong" isLoggedIn={true} />
    </div>
  );
}

export default App;
