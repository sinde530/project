import React from 'react';

import styles from './header.module.css';

function Header({ onLogout }) {
  return (
    <header className={styles.header}>
      {true && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img src="/images/logo.png" alt="img" className={styles.logo} />
      <h1 className={styles.title}>Business Card Makers</h1>
    </header>
  );
}

export default Header;
