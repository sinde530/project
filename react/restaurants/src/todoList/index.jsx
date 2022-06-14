import React, { useState } from 'react';

import Title from './Title';
import List from './List';
import TodoInsert from './TodoInsert';

import isEmpty from '../utils/isEmpty';

export default function TodoList() {
  const [state, setState] = useState({
    title: '',
    todos: [],
    todoId: 0,
  });

  const { title, todos, todoId } = state;

  function handleChangeInput(e) {
    setState({
      ...state,
      title: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setState({
      title: '',
      todos: [...todos, {
        id: todoId,
        text: title,
        done: false,
      }],
      todoId: todoId + 1,
    });
  }

  function handleClickDone(id) {
    setState({
      ...state,
      todos: todos.filter((todo) => todo.id !== id),
    });
  }

  return (
    <div>
      <Title>To Do List</Title>
      <div>
        <TodoInsert
          title={title}
          onChange={handleChangeInput}
          onSubmit={handleSubmit}
        />
      </div>
      <List
        todos={todos}
        onClick={handleClickDone}
        isEmpty={isEmpty}
      />
    </div>

  );
}
