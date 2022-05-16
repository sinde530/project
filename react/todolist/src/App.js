import React, { useState } from 'react';

import Page from './components/Page';

import './App.css';

function App() {
  const [state, setState] = useState({
    newId: 100,
    tasks: [
      {
        id: 1,
        title: '아무것도 하지 않기 #1',
      },
      {
        id: 2,
        title: '아무것도 하지 않기 #2',
      },
    ],
  });

  const { newId, tasks } = state;

  function handleClick() {
    // 할일 추가
    setState({
      newId: newId + 1,
      tasks: [...tasks, { id: newId, title: 'new taks' }],
    });
  }

  return (
    <div>
      <Page tasks={tasks} onClick={handleClick} />
    </div>
  );
}

export default App;
