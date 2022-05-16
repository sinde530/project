import { useState } from 'react';

import Input from './components/Input';

import './App.css';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const tasks = [
    {
      title: '아무것도 하지 않기',
    },
  ];

  function onClick() {
    // 할일 추가
  }

  function List() {}

  const { count } = state;

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
