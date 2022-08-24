import Button from './Button';

interface Props {
  FileInput: any;
  cards: any;
  handleCreateUpdateCard: (card: any) => void;
  handleDeleteCard: (card: any) => void;
}

export default function CardForm({
  FileInput,
  cards,
  handleCreateUpdateCard,
  handleDeleteCard,
}: Props) {
  const { name, company, title, email, message, theme } = cards;

  const onFileChange = (file: any) => {
    handleCreateUpdateCard({
      ...cards,
      fileName: file.name,
      fileUrl: file.url,
    });
  };

  const onChange = (e: any) => {
    if (e.currentTarget == null) {
      return;
    }
    e.preventDefault();
    handleCreateUpdateCard({
      ...cards,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmit = () => {
    handleDeleteCard(cards);
  };

  return (
    <form>
      <input type="text" name="name" value={name} onChange={onChange} />
      <input type="text" name="company" value={company} onChange={onChange} />
      <select name="theme" value={theme} onChange={onChange}>
        <option>Light</option>
        <option>Dark</option>
        <option>colorFul</option>
      </select>
      <input type="text" name="title" value={title} onChange={onChange} />
      <input type="text" name="email" value={email} onChange={onChange} />
      <textarea name="message" value={message} onChange={onChange} />
      <div>
        <FileInput name={name} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onSubmit={onSubmit} />
    </form>
  );
}
