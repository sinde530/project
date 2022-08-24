import { useRef } from 'react';

import { Form, Input, Textarea, Select, FileInputBox } from './styled';

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

  const nameRef = useRef<any>(undefined);
  const companyRef = useRef<any>(undefined);
  const themeRef = useRef<any>(undefined);
  const titleRef = useRef<any>(undefined);
  const emailRef = useRef<any>(undefined);
  const messageRef = useRef<any>(undefined);

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
    <Form>
      <Input
        ref={nameRef}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <Input
        ref={companyRef}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <Select ref={themeRef} name="theme" value={theme} onChange={onChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">colorFul</option>
      </Select>
      <Input
        ref={titleRef}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <Input
        ref={emailRef}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <Textarea
        ref={messageRef}
        name="message"
        value={message}
        onChange={onChange}
      />
      <FileInputBox>
        <FileInput name={name} onFileChange={onFileChange} />
      </FileInputBox>
      <Button name="Delete" onSubmit={onSubmit} />
    </Form>
  );
}
