import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;
  font-family: "Noto Sans KR", sans-serif;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  margin-bottom: 5px;
`;

const ItemIndex = styled.div`
  display: flex;
  width: 5%;
  height: 100%;
  align-items: center;
`;

const ItemContent = styled.div`
  display: flex;
  width: 85%;
  height: 100%;
  align-items: center;
  span {
    cursor: pointer;
  }
`;

const ItemBtn = styled.div`
  display: flex;
  width: 10%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: red;
  cursor: pointer;
`;

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
  };
};

function TodoItem({ todo }: TodoItemProps) {
  return (
    <Container>
      <ItemIndex>
        <span>{todo.id}</span>
      </ItemIndex>
      <ItemContent>
        <span>{todo.text}</span>
      </ItemContent>
      <ItemBtn>
        <span>삭제</span>
      </ItemBtn>
    </Container>
  );
}

export default TodoItem;
