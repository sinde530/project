import React from 'react';

import Footer from '../footer/Footer';
import Header from '../header/Header';

import styles from './login.module.css';

function Login({ authService }) {
  function onLogin(e) {
    console.log(onLogin);
    authService //
      .login(e.currentTarget.textContent)
      .then(console.log);
    // const loginRoute = e.currentTarget.innerHTML;
    // authService.login(loginRoute).then(console.log);
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
