import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from 'src/components/Header';
import Editor from 'src/components/Editor';
import Preivew from 'src/components/Preivew';

import styled from '@emotion/styled';

import Footer from 'src/Footer';

const Container = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});
const Box = styled.div({
  display: 'flex',
  flex: '1',
  '@media(max-width: 992px)': {
    flexDirection: 'column',
  },
});

interface Props {
  authService: any;
  FileInput: any;
}
export default function Maker({ FileInput, authService }: Props) {
  const navigate = useNavigate();
  const [cards, setCards] = useState<any>({
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

  useEffect(() => {
    authService //
      .onAuthChange((user: any) => {
        if (!user) {
          navigate('/');
        }
      });
  });

  const handleCreateUpdateCard = (card: number | any) => {
    setCards((prev: any) => {
      const updated = { ...prev };

      updated[card.id] = card;
      return updated;
    });
  };

  const handleDeleteCard = (card: number | any) => {
    setCards((prev: any) => {
      const updated = { ...prev };

      delete updated[card.id];
      return updated;
    });
  };

  return (
    <Container>
      <Header handleLogout={handleLogout} />
      <Box>
        <Editor
          FileInput={FileInput}
          cards={cards}
          handleCreateUpdateCard={handleCreateUpdateCard}
          handleDeleteCard={handleDeleteCard}
        />
        <Preivew cards={cards} />
      </Box>
      <Footer />
    </Container>
  );
}
