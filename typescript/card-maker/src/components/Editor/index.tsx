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
  addCard: (card: any) => void;
  updateCard: (card: any) => void;
  deleteCard: (card: any) => void;
}

export default function Editor({
  FileInput,
  cards,
  addCard,
  updateCard,
  deleteCard,
}: Props) {
  return (
    <Container>
      <Title>Card Maker</Title>
      {Object.keys(cards).map((key) => (
        <CardForm
          key={key}
          FileInput={FileInput}
          cards={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
      <CardAddForm FileInput={FileInput} onAdd={addCard} />
    </Container>
  );
}
