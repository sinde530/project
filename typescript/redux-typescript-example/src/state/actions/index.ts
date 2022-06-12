import { ActionType } from "../action-types";

interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}
interface WithdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}
interface BankruptAction {
  type: ActionType.BANKRUPT;
}

// Action(액션)은 앱에서 스토어에 운반할 데이터를 말한다.
export type Action = DepositAction | WithdrawAction | BankruptAction;
