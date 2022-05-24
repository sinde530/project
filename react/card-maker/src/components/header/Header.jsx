/* eslint-disable react/button-has-type */
import React from 'react';

import styles from './header.module.css';

export default function Header({ onLogout }) {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img src="/images/logo.png" alt="img" className={styles.logo} />
      <h1 className={styles.title}>Card Makers</h1>
    </header>
  );
}
