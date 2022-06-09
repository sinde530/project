import { ActionType, createAction, createReducer } from "typesafe-actions";

interface TodoItemDataParms {
  id: number;
  text: string;
  done: boolean;
}

interface ToDoState {
  todoItems: TodoItemDataParms[];
}

const SUBMIT = "todo/SUBMIT";
// const SUBMIT = "todo/SUBMIT" as const;
const DELETE = "todo/DELETE";
const TOGLE = "todo/TOGLE";

export const submit = createAction(SUBMIT)<TodoItemDataParms>();
