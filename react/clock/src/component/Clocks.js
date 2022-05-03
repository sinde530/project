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
        <div className="clock">{this.state.date.toLocaleTimeString()}</div>
      </div>
    );
  }
}

export default Clocks;
