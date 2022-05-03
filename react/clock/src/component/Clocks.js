import React, { Component } from "react";

class Clocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h2>현재 시간</h2>
        <div>{this.state.date.toLocaleTimeString()}</div>
      </div>
    );
  }
}

export default Clocks;
