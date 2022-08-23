import { useNavigate } from 'react-router-dom';

interface Props {
  authService: any;
}
export default function Login({ authService }: Props) {
  const navigate = useNavigate();

  const goToMaker = () => {
    navigate('/maker');
  };

  const handleLogin = (e: any) => {
    authService //
      .login(e.currentTarget.textContent)
      .then(() => goToMaker());
  };

  return (
    <div>
      <h1>Social Login Pages</h1>
      <ul>
        <li>
          <button type="button" onClick={handleLogin}>
            Google
          </button>
        </li>
        <li>
          <button type="button" onClick={handleLogin}>
            Github
          </button>
        </li>
      </ul>
    </div>
  );
}
