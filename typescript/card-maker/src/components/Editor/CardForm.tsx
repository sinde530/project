import Button from './Button';
import FileInput from './FileInput';

interface Props {
  cards: any;
}

export default function CardForm({ cards }: Props) {
  return (
    <form>
      <input type="text" name="name" />
      <input type="text" name="name" />
      <select name="theme">
        <option>1</option>
        <option>1</option>
        <option>1</option>
      </select>
      <input type="text" name="name" />
      <input type="text" name="name" />
      <textarea name="message" />
      <div>
        <FileInput />
      </div>
      <Button />
    </form>
  );
}
