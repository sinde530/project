import React from 'react';

import Card from '../card/Card';

import styles from './preview.module.css';

function Preview({ cards }) {
  return (
    <div className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      {/* Card 컴포넌트에서 id를 가져온다 */}
      <ul className={styles.cards}>
        {Object.keys(cards).map((key) => (
          <Card key={key} card={cards[key]} />
        ))}
      </ul>
    </div>
  );
}

export default Preview;
