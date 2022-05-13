import React, { useEffect } from 'react';

import styles from './maker.module.css';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';

export default function Maker({ authService }) {
  const navigate = useNavigate();

  function onLogout() {
    authService.logout();
  }

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        // 사용자가 없다면 '/' 으로 처리해준다
        if (!user) {
          navigate('/');
        }
      });
  });

  return (
    <div className={styles.maker}>
      <Header onLogout={onLogout} />
      <Footer />
    </div>
  );
}
