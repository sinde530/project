import CardForm from './CardForm';

interface Props {
  cards: any;
}

export default function Editor({ cards }: Props) {
  if (!cards) {
    <>...</>;
  }

  return (
    <div>
      <h1>Card Maker</h1>
      {Object.keys(cards).map((key) => (
        <CardForm key={key} cards={cards[key]} />
      ))}
    </div>
  );
}
