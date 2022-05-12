import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function Login({ authService }) {
  function onLogin(e) {
    authService //
      .login(e.currentTarget.textContent)
      .then(console.log);
  }
  return (
    <div>
      <Header />
      <div>
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
