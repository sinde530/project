import React from 'react';

import CardAddForm from '../card_add_form/CardAddForm';
import CardEditForm from '../card_edit_form/CardEditForm';

import styles from './editor.module.css';

function Editor({ cards, addCard, updateCard, deleteCard }) {
  return (
    <div className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>

      {/* Card 컴포넌트에서 id를 가져온다 */}
      {cards.map((card) => (
        <CardEditForm key={card.id} card={card} updateCard={updateCard} deleteCard={deleteCard} />
      ))}
      <CardAddForm onAdd={addCard} />
    </div>
  );
}

export default Editor;
