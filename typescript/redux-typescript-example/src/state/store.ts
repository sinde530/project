import { applyMiddleware, createStore } from "redux";

// what is thunk?
import thunk from "redux-thunk";

import reducer from "./reducres/index";
// thunk, reducer 를 state/index에 내보낼것이다.

export const store = createStore(reducer, {}, applyMiddleware(thunk));
