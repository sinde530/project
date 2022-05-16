import React from 'react';

import Input from './components/Input';
import List from './components/List';

export default function Page({ tasks, onClick }) {
  return (
    <div>
      <h1>To do list</h1>
      <Input onClick={onClick} />
      <List tasks={tasks} />
    </div>
  );
}
