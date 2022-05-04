import React, { Component } from "react";

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          {this.state.isToggleOn ? "On" : "Off"}
        </button>
      </div>
    );
  }
}
