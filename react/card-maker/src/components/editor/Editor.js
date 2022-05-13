import React from 'react';

import CardEditForm from '../card_edit_form/CardEditForm';

import styles from './editor.module.css';

function Editor({ cards }) {
  return (
    <div className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>

      {/* Card 컴포넌트에서 id를 가져온다 */}
      {cards.map((card) => (
        <CardEditForm card={card} />
      ))}
    </div>
  );
}

export default Editor;
