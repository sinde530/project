import { useState } from 'react';

import Page from './components/Page';

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

  function handleClick() {
    // 할일 추가
  }

  return (
    <div>
      <Page tasks={tasks} onClick={handleClick} />
    </div>
  );
}

export default App;
