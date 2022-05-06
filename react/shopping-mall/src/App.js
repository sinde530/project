import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './component/header/Index';
import Main from './component/main/Main';
import Cart from './component/cart/Cart';
import Item from './component/item/Item';
import data from './component/data/Mock.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data,
    };
    this.renderFoodDetail = this.renderFoodDetail.bind(this);
  }

  componentDidMount() {
    console.log(this.state.products);
  }

  renderFoodDetail() {
    return this.state.products.map((products) => {
      return (
        <Route
          path={`/item/${products.id}`}
          render={(props) => {
            return (
              <Item
                image={products.image}
                name={products.name}
                price={products.price}
                id={products.id}
                key={products.id}
              />
            );
          }}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Index />
        <Routes>
          {/* <Route path="/" element={<Main />} /> */}
          <Route
            path="/"
            render={(props) => {
              return <Main products={this.state.products} />;
            }}
          />
          {this.renderFoodDetail()}
        </Routes>
      </div>
    );
  }
}

export default App;
