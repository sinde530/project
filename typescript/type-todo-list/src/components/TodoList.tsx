import styled from "styled-components";
import TodoItem from "./TodoItem";

const ListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  span {
    font-family: "Noto Sans KR", sans-serif;
    font-size: large;
    font-weight: bold;
  }
`;

export default function TodoList() {
  const todos = [
    {
      id: 1,
      text: "Context API 배우기",
    },
    {
      id: 2,
      text: "TypeScript 배우기",
    },
    {
      id: 3,
      text: "TypeScript 와 Context API 함께 사용하기",
    },
  ];

  return (
    <div>
      <ListContainer>
        {todos.length === 0 ? (
          <span>오늘 할 일을 등록하세요!</span>
        ) : (
          todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
        )}
      </ListContainer>
    </div>
  );
}
