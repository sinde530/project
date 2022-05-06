import './App.css';
import Index from './component/header/Index';
import React, { Component } from 'react';
import data from './component/data/Mock.json';
import { Route, Routes } from 'react-router-dom';
import Main from './component/main/Main';
import Cart from './component/cart/Cart';

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
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    );
  }
}

export default App;
