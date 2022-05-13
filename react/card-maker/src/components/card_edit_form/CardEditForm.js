import React from 'react';

// import styles from './cardeditform.module.css';

const CardEditForm = ({ card }) => {
  const { name, company, title, email, message, theme, fireName, fileURL } = card;

  return (
    <form>
      <input type="text" name="name" value={name} />
    </form>
  );
};

export default CardEditForm;
