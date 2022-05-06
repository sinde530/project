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
      cart: [],
      quantity: 1,
      totalAmount: 0,
    };
    this.renderFoodDetail = this.renderFoodDetail.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
  }

  handleAddToCart(selectedProducts) {
    let cartItem = this.state.cart;
    let productID = selectedProducts.id;
    if (this.checkProduct(productID)) {
      let index = cartItem.findIndex((item) => {
        return item.id === productID;
      });
      cartItem[index].quantity += 1;
      this.setState({
        cart: cartItem,
      });
    } else {
      cartItem.push(selectedProducts);
      this.setState({
        cart: cartItem,
        quantity: 1,
      });
    }
  }

  renderFoodDetail() {
    return this.state.products.map((products) => {
      return (
        <Route
          path={`/item/${products.id}`}
          render={(props) => {
            return (
              <Item
                addToCart={this.handleAddToCart}
                productQuantity={this.state.quantity}
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

  // 장바구니에 이미 제품이 있는지 확인하는 메소드
  checkProduct(id) {
    let cart = this.state.cart;
    return cart.some((item) => {
      return item.id === id;
    });
  }

  sumTotalAmount() {
    let cart = this.state.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].checked === true) {
        total += cart[i].price * Number(cart[i].quantity);
      }
    }
    this.setState({
      totalAmount: total,
    });
  }

  componentDidMount() {
    let cart = localStorage.cart;
    if (cart) {
      this.setState(
        (prevState) => ({
          cart: JSON.parse(cart),
        }),
        function () {
          this.sumTotalAmount();
        }
      );
    }
    console.log(this.state.products);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cart !== this.state.cart) {
      localStorage.cart = JSON.stringify(this.state.cart);
    }
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
