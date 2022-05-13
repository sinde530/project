import React from 'react';

import styles from './card.module.css';

const Card = ({ card }) => {
  const { name, company, title, email, message, theme, fireName, fileURL } = card;
  const DEFAULT_IMAGE = '/images/default_logo.png';

  //   url이 없다면 DEFAULT_IMAGE 이미지로 반영한다
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card} ${getStyles(theme)} `}>
      {/* 변수에 접근해야 하기때문에 {}사용 */}
      <img className={styles.avatar} src={url} alt="profile" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    default:
      // 잘못된 데이터를 받거나 제대로 핸들링을 안해줬을때 나오는 에러
      throw new Error(`unknow theme: ${theme}`);
  }
}

export default Card;
