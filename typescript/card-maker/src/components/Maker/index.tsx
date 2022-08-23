import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from 'src/components/Header';
import Editor from '../Editor';

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
      message: 'go for it',
      fileName: 'Crong',
      fileURL: null,
    },
  });

  const handleLogout = () => {
    authService.logout();
    window.localStorage.clear();
    alert('로그아웃 하였음.');
  };

  return (
    <div>
      <div>
        <Header handleLogout={handleLogout} />
        <div>
          <Editor cards={cards} />
        </div>
        <div>Preivew Component</div>
      </div>
      <div>Footer Component</div>
    </div>
  );
}
