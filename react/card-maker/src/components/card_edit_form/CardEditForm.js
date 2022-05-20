import React, { useRef } from 'react';
import Button from '../button/Button';

import styles from './cardeditform.module.css';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } = card;
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const messageRef = useRef();

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (e) => {
    // currentTarget이 null이면 return해줌
    if (e.currentTarget == null) {
      return;
    }
    e.preventDefault();
    updateCard({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const onSubmit = () => {
    deleteCard(card);
  };

  return (
    <form className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        defaultValue={name}
        onChange={onChange}
      />
      <input
        ref={companyRef}
        className={styles.inout}
        type="text"
        name="company"
        defaultValue={company}
        onChange={onChange}
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        defaultValue={theme}
        onChange={onChange}
      >
        <option value="light">Light</option>
        <option value="dard">Dark</option>
        <option value="colorful">colorFul</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        defaultValue={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        defaultValue={email}
        onChange={onChange}
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        defaultValue={message}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <FileInput name={name} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
