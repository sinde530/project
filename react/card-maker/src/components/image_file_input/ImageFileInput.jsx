import React, { useRef, useState } from 'react';

import styles from './imagefileinput.module.css';

function ImageFileInput({ ImageUpload, name, onFileChange }) {
  // 이미지 로딩이 되고있으니 false판정
  const [loading, setLodaing] = useState(false);
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setLodaing(true);
    // console.log(event.target.files[0]);
    const uploaded = await ImageUpload.upload(event.target.files[0]);
    setLodaing(false);
    // console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
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
      {!loading && (
        <button
          type="button"
          className={`${styles.button} ${name ? styles.pink : styles.gray} `}
          onClick={onButtonClick}
        >
          {name || 'no File'}
        </button>
      )}
      {loading && <div className={styles.loading} />}
    </div>
  );
}

export default ImageFileInput;
