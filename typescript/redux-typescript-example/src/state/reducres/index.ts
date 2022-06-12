import { combineReducers } from "redux";

import { bankReducer } from "./bankReducer";

// ## 다중 감속기를 사용하려면 main.ts 파일을 만들어 `combineReducers` - redux 사용.
// - dependencies

const reducers = combineReducers({
  // object create
  bank: bankReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
