import Card from 'src/components/Card';

interface Props {
  cards: any;
}

export default function Preivew({ cards }: Props) {
  return (
    <div>
      <h1>Card PreView</h1>

      <ul>
        {Object.keys(cards).map((key) => (
          <Card key={key} cards={cards[key]} />
        ))}
      </ul>
    </div>
  );
}
