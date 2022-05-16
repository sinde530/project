import React from 'react';

export default function List({ tasks }) {
  const Comments = [
    {
      id: 0,
      name: 'Crong',
      text: 'Work To Do #1',
    },
    {
      id: 1,
      name: 'sinde',
      text: 'Work To Do #2',
    },
  ];

  return (
    <div>
      {tasks.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <div>
        {Comments.map((item, index) => (
          <li key={index}>
            {item.name}
            {item.text}
          </li>
        ))}
      </div>
    </div>
  );
}
