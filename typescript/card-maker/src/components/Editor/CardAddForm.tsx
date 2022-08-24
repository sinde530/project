import React, { useRef, useState } from 'react';

import Button from './Button';

import { Form, Input, Textarea, Select, FileInputBox } from './styled';

interface Props {
  FileInput: any;
  handleCreateUpdateCard: (card: any) => void;
}

function CardAddForm({ FileInput, handleCreateUpdateCard }: Props) {
  const formRef = useRef<any>(undefined);
  const nameRef = useRef<any>(undefined);
  const companyRef = useRef<any>(undefined);
  const themeRef = useRef<any>(undefined);
  const titleRef = useRef<any>(undefined);
  const emailRef = useRef<any>(undefined);
  const messageRef = useRef<any>(undefined);
  const [file, setFile] = useState({
    fileName: null,
    fileURL: null,
  });

  function onSubmit(e: any) {
    e.preventDefault();

    const card = {
      id: Date.now(), // uuid
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    handleCreateUpdateCard(card);
  }

  const onFileChange = (file: any) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  return (
    <Form ref={formRef}>
      <Input ref={nameRef} type="text" name="name" placeholder="Name" />
      <Input
        ref={companyRef}
        type="text"
        name="company"
        placeholder="Company"
      />
      <Select ref={themeRef} name="theme" placeholder="Theme">
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </Select>
      <Input ref={titleRef} type="text" name="title" placeholder="Title" />
      <Input ref={emailRef} type="text" name="email" placeholder="Email" />
      <Textarea ref={messageRef} name="message" placeholder="Message" />
      <FileInputBox>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </FileInputBox>
      <Button name="Add" onSubmit={onSubmit} />
    </Form>
  );
}

export default CardAddForm;
