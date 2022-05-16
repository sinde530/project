import React, { useState } from 'react';

import Page from './components/Page';

import './App.css';

function App() {
  const [state, setState] = useState({
    newId: 100,
    taskTitle: '',
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

  const { newId, taskTitle, tasks } = state;

  function handleChangeTitle(e) {
    setState({
      ...state,
      taskTitle: e.target.value,
    });
    console.log(e.target.value);
  }

  function handleClickAdd() {
    // 할일 추가
    setState({
      ...state,
      newId: newId + 1,
      // 입력후 클릭시 taskTitle 초기화시키기
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    });
  }

  return (
    <div>
      <Page
        tasks={tasks}
        taskTitle={taskTitle}
        onChangeTitle={handleChangeTitle}
        onClick={handleClickAdd}
      />
    </div>
  );
}

export default App;
