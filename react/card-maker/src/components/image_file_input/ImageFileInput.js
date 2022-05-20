import React, { useRef } from 'react';

import styles from './imagefileinput.module.css';

function ImageFileInput({ ImageUpload, name, onFileChange }) {
  const inputRef = useRef();
  const onButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = (e) => {
    console.log(e.target.vaule[0]);
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button type="button" className={styles.button} onClick={onButtonClick}>
        {name || 'no File'}
      </button>
    </div>
  );
}

export default ImageFileInput;
