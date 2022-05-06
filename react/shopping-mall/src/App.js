import './App.css';
import Index from './component/header/Index';
import React, { Component } from 'react';
import data from './component/data/Mock.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data,
    };
  }

  componentDidMount() {
    console.log(this.state.products);
  }

  render() {
    return (
      <div>
        <Index />
      </div>
    );
  }
}

export default App;
