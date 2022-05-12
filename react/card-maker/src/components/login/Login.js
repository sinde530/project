import React from 'react';
import Header from '../header/Header';

function Login({ authService }) {
  return (
    <div>
      <Header />
      <div>
        <h1>Login</h1>
        <ul>
          <li>
            <button>Google</button>
          </li>
          <li>
            <button>Github</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
