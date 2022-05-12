import React from 'react';
import Header from '../header/Header';

function Login() {
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
