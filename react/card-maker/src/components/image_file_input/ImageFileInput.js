import React, { useRef } from 'react';

import styles from './imagefileinput.module.css';

function ImageFileInput({ ImageUpload, name, onFileChange }) {
  const inputRef = useRef();
  const onButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (e) => {
    // console.log(e.target.files[0]);
    const uploaded = await ImageUpload.upload(e.target.files[0]);
    console.log(uploaded);
    // onFileChange({
    //   name: 'FileName',
    //   url: 'url',
    // });
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
