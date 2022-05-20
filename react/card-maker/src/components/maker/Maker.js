import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './maker.module.css';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';

export default function Maker({ FileInput, authService }) {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });
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

  function CreateOrUpdateCard(card) {
    // state 업데이트 하기위해 cards 전부를 가져온다.
    const update = { ...cards };
    // card.id 로 오브젝트 전체를 변경시켜준다.
    update[card.id] = card;
    setCards(update);
  }
  function deleteCard(card) {
    // state 업데이트 하기위해 cards 전부를 가져온다.
    const update = { ...cards };
    // card.id 로 오브젝트 전체를 변경시켜준다.
    delete update[card.id];
    setCards(update);
  }

  return (
    <div className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          // addCard={addCard}
          addCard={CreateOrUpdateCard}
          updateCard={CreateOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </div>
  );
}
