import React from 'react';

import styles from './maker.module.css';

import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function Maker({ authService }) {
  function onLogout() {
    authService.logout();
  }

  return (
    <div className={styles.maker}>
      <Header onLogout={onLogout} />
      <Footer />
    </div>
  );
}
