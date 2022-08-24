interface Props {
  name: string;
  onSubmit: (cards: any) => void;
}

export default function Button({ name, onSubmit }: Props) {
  return <button onSubmit={onSubmit}>{name}</button>;
}
