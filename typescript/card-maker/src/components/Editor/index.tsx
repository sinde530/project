import CardForm from './CardForm';

interface Props {
  cards: any;
  handleCreateUpdateCard: (card: any) => void;
  handleDeleteCard: (card: any) => void;
}

export default function Editor({
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
          cards={cards[key]}
          handleCreateUpdateCard={handleCreateUpdateCard}
          handleDeleteCard={handleDeleteCard}
        />
      ))}
    </div>
  );
}
