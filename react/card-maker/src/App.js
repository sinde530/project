import './App.css';
import Login from './components/login/Login';

export default function App({ authService }) {
  return (
    <div>
      <Login authService={authService} />
    </div>
  );
}
