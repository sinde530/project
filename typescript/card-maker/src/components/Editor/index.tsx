import styled from '@emotion/styled';
import CardAddForm from './CardAddForm';
import CardForm from './CardForm';

const Container = styled.div({
  flexBasis: '50%',
  backgroundColor: 'pink',
  padding: '0.5rem 2rem',
});

const Title = styled.h1({
  width: '100%',
  textAlign: 'center',
  marginBottom: '1rem',
  color: '#385461',
});

interface Props {
  FileInput: any;
  cards: any;
  handleCreateUpdateCard: (card: any) => void;
  handleDeleteCard: (card: any) => void;
}

export default function Editor({
  FileInput,
  cards,
  handleCreateUpdateCard,
  handleDeleteCard,
}: Props) {
  return (
    <Container>
      <Title>Card Maker</Title>
      {Object.keys(cards).map((key) => (
        <CardForm
          key={key}
          FileInput={FileInput}
          cards={cards[key]}
          handleCreateUpdateCard={handleCreateUpdateCard}
          handleDeleteCard={handleDeleteCard}
        />
      ))}
      <CardAddForm
        FileInput={FileInput}
        handleCreateUpdateCard={handleCreateUpdateCard}
      />
    </Container>
  );
}
