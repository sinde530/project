import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './login.module.css';

import Footer from '../footer/Footer';
import Header from '../header/Header';

function Login({ authService }) {
  // navigate를 사용할때 꼭 변수선언
  const navigate = useNavigate();

  function onLogin(e) {
    authService //
      .login(e.currentTarget.textContent)
      .then((data) => GoToMaker(data.user.uid));
  }

  function GoToMaker(userId) {
    navigate('/maker', { id: userId });
  }

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

export default Login;
