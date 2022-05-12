import './App.css';
import Login from './components/login/Login';

function App({ authService }) {
  return (
    <div>
      <Login authService={authService} />
    </div>
  );
}

export default App;
