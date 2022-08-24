import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from 'src/components/Header';
import Editor from '../Editor';
import Preivew from '../Preivew';

interface Props {
  authService: any;
}
export default function Maker({ authService }: Props) {
  const navigate = useNavigate();

  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Crong',
      company: 'Belivvr',
      theme: 'dark',
      title: 'FrontEnd',
      email: 'sinde530@gmail.com',
      message: 'go for it1',
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
      message: 'go for it2',
      fileName: 'Crong2',
      fileURL: null,
    },
    3: {
      id: '3',
      name: 'Crong3',
      company: 'Belivvr',
      theme: 'colorful',
      title: 'FrontEnd',
      email: 'sinde530@gmail.com',
      message: 'go for it3',
      fileName: 'Crong',
      fileURL: null,
    },
  });

  const handleLogout = () => {
    authService.logout();
    window.localStorage.clear();
    alert('로그아웃 하였음.');
  };

  const handleCreateUpdateCard = (card: any) => {
    setCards((prev) => {
      const updated = { ...prev };
      updated[card.id] = card;
      return updated;
    });
  };

  const handleDeleteCard = (card: any) => {
    setCards((prev) => {
      const updated = { ...prev };

      delete updated[card.id];
      return updated;
    });
  };

  return (
    <div>
      <div>
        <Header handleLogout={handleLogout} />
        <div>
          <Editor
            cards={cards}
            handleCreateUpdateCard={handleCreateUpdateCard}
            handleDeleteCard={handleDeleteCard}
          />
        </div>
        <Preivew cards={cards} />
      </div>
      <div>Footer Component</div>
    </div>
  );
}
