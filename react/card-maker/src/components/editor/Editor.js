import React from 'react';

import CardAddForm from '../card_add_form/CardAddForm';
import CardEditForm from '../card_edit_form/CardEditForm';

import styles from './editor.module.css';

function Editor({ FileInput, cards, addCard, updateCard, deleteCard }) {
  return (
    <div className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>

      {/* Card 컴포넌트에서 id를 가져온다 */}
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
      <CardAddForm FileInput={FileInput} onAdd={addCard} />
    </div>
  );
}

export default Editor;
