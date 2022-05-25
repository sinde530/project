import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './login.module.css';

import Footer from '../footer/Footer';
import Header from '../header/Header';

export default function Login({ authService }) {
  // navigate를 사용할때 꼭 변수선언
  const navigate = useNavigate();

  function GoToMaker(userId) {
    navigate('/maker', { id: userId });
  }

  function onLogin(e) {
    authService //
      .login(e.currentTarget.textContent)
      .then((data) => GoToMaker(data.user.uid));
  }

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        // 사용자가 로그인을 했다면 GoToMaker로 이동한다 (id)
        // 로그인을 했다면 해당 페이지로 넘어간다
        user && GoToMaker(user.id);
      });
  });

  return (
    <div className={styles.login}>
      <Header />
      <div>
        <h1>Social Login Pages</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.google_button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.github_button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
