import React from 'react';
import Button from '../button/Button';
import ImageFileInput from '../image_file_input/ImageFileInput';

import styles from './cardeditform.module.css';

const CardEditForm = ({ card }) => {
  const { name, company, title, email, message, theme, fireName, fileURL } = card;
  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} />
      <input className={styles.inout} type="text" name="company" value={company} />
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">Light</option>
        <option value="dard">Dark</option>
        <option value="colorful">colorFul</option>
      </select>
      <input className={styles.input} type="text" name="title" value={title} />
      <input className={styles.input} type="text" name="email" value={email} />
      <textarea className={styles.textarea} name="message" value={message}></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit}></Button>
    </form>
  );
};

export default CardEditForm;
