import { useState } from 'react';

import Input from './components/Input';
import List from './components/List';

import './App.css';

function App() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  const tasks = [
    {
      id: 1,
      title: '아무것도 하지 않기 #1',
    },
    {
      id: 2,
      title: '아무것도 하지 않기 #2',
    },
  ];

  function onClick() {
    // 할일 추가
  }

  return (
    <div className="App">
      <h1>To do list</h1>
      <h2>{count}</h2>
      <Input onClick={onClick} />
      <List tasks={tasks} />
    </div>
  );
}

export default App;
