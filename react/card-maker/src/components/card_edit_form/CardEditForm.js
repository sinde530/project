import React from 'react';
import Button from '../button/Button';
import ImageFileInput from '../image_file_input/ImageFileInput';

import styles from './cardeditform.module.css';

const CardEditForm = ({ card }) => {
  const { name, company, title, email, message, theme } = card;
  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" defaultValue={name} />
      <input className={styles.inout} type="text" name="company" defaultValue={company} />
      <select className={styles.select} name="theme" defaultValue={theme}>
        <option value="light">Light</option>
        <option value="dard">Dark</option>
        <option value="colorful">colorFul</option>
      </select>
      <input className={styles.input} type="text" name="title" defaultValue={title} />
      <input className={styles.input} type="text" name="email" defaultValue={email} />
      <textarea className={styles.textarea} name="message" defaultValue={message} />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
