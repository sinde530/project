const initialState = 0;

interface DepositAction {
  type: "deposit";
  payload: number;
}
interface WithdrawAction {
  type: "withdraw";
  payload: number;
}
interface BackruptAction {
  type: "backrupt";
}

// Action(액션)은 앱에서 스토어에 운반할 데이터를 말한다.
type Action = DepositAction | WithdrawAction | BackruptAction;

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    case "backrupt":
      return 0;
    default:
      return state;
  }
};

export default reducer;
