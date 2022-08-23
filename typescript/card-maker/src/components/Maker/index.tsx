import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  };
  return (
    <div>
      <div>
        Header
        <div>Editor Component</div>
        <div>Preivew Component</div>
      </div>
      <div>Footer Component</div>
    </div>
  );
}
