import CardAddForm from './CardAddForm';
import CardForm from './CardForm';

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
  if (!cards) {
    <>...</>;
  }

  return (
    <div>
      <h1>Card Maker</h1>
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
    </div>
  );
}
