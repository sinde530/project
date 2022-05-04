import React, { Component } from 'react';

export default class Gugudan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: '',
      result: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (Number(this.state.value) === this.state.first * this.state.second) {
      this.setState({
        result: 'good',
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
      });
    } else {
      this.setState({
        result: 'no',
        value: '',
      });
    }
  };

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    console.log(this.state.first, this.state.second);
    console.log(this.state.handleSubmit);

    return (
      <div>
        {this.state.first} * {this.state.second}
        <form onSubmit={this.handleSubmit}>
          <input type="number" value={this.state.value} onChange={this.onChange} />
          <button type="submit">submit</button>
        </form>
        <div>{this.state.result}</div>
      </div>
    );
  }
}
