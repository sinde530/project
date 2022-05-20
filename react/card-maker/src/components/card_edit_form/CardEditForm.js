import React from 'react';
import Button from '../button/Button';

import styles from './cardeditform.module.css';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, title, email, message, theme } = card;

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
        className={styles.input}
        type="text"
        name="name"
        defaultValue={name}
        onChange={onChange}
      />
      <input
        className={styles.inout}
        type="text"
        name="company"
        defaultValue={company}
        onChange={onChange}
      />
      <select className={styles.select} name="theme" defaultValue={theme} onChange={onChange}>
        <option value="light">Light</option>
        <option value="dard">Dark</option>
        <option value="colorful">colorFul</option>
      </select>
      <input
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
        className={styles.textarea}
        name="message"
        defaultValue={message}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <FileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
