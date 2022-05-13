import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './maker.module.css';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';

export default function Maker({ authService }) {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Crong',
      company: 'Belivvr',
      theme: 'dark',
      title: 'FrontEnd',
      email: 'sinde530@gmail.com',
      message: 'go for it',
      fileName: 'Crong',
      fileURL: null,
    },
    {
      id: '2',
      name: 'Crong2',
      company: 'Belivvr',
      theme: 'light',
      title: 'FrontEnd',
      email: 'sinde530@gmail.com',
      message: 'go for it',
      fileName: 'Crong',
      fileURL: null,
    },
    {
      id: '3',
      name: 'Crong3',
      company: 'Belivvr',
      theme: 'colorful',
      title: 'FrontEnd',
      email: 'sinde530@gmail.com',
      message: 'go for it',
      fileName: 'Crong',
      fileURL: null,
    },
  ]);
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
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </div>
  );
}
