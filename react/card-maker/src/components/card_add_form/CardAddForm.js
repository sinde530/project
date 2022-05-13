import React, { useRef } from 'react';
import Button from '../button/Button';
import ImageFileInput from '../image_file_input/ImageFileInput';

import styles from './cardaddform.module.css';

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  function onSubmit(e) {
    e.preventDefault();

    const card = {
      id: Date.now(), //uuid
      // value가있으면 이걸쓰고 없으면 ''으로 출력
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value || '',
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    };
    formRef.current.reset();
    onSubmit(card);
  }

  return (
    <form className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="name" />
      <input
        ref={companyRef}
        className={styles.inout}
        type="text"
        name="company"
        placeholder="company"
      />
      <select ref={themeRef} className={styles.select} name="theme" placeholder="theme">
        <option placeholder="light">Light</option>
        <option placeholder="dard">Dark</option>
        <option placeholder="colorful">colorFul</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="title" />
      <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="email" />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="message"
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
