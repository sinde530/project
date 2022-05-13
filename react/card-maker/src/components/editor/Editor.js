import React from 'react';
import Card from '../card/Card';

import styles from './editor.module.css';

function Editor({ cards }) {
  return (
    <div className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>

      {/* Card 컴포넌트에서 id를 가져온다 */}
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
}

export default Editor;
