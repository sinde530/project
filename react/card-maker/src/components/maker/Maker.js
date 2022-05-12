import React from 'react';
import Header from '../header/Header';

export default function Maker({ onLogout }) {
  return (
    <div>
      <Header onClick={onLogout} />
    </div>
  );
}
