import { useDispatch } from "react-redux";

import { bindActionCreators } from "redux";

import Greeting from "./components/Greeting";

import actionCreators from "./state/action-creators";

import "./App.css";

export default function App() {
  const dispatch = useDispatch();

  const { deposiMoney } = bindActionCreators(actionCreators, dispatch);

  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return (
    <div className="App">
      <Greeting name="crong" mark="!" onClick={onClick} />
      <h1>0</h1>
      <button type="button">Deposit</button>
      <button type="button">Withdraw</button>
      <button type="button">bankrupt</button>
    </div>
  );
}
