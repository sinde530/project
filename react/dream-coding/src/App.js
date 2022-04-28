import React, { Component } from "react";
import './App.css';
import ListItem from './components/habitPlan/ListItem';
import Navbar from './components/Navbar';

export default class App extends Component {
  state = {
    listItem: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ]
  }

  handleIncrement = list => {
    const listItem = this.state.listItem.map(item => {
      if (item.id === list.id) {
        return { ...list, count: list.count + 1 }
      }
      return item;
    });
    this.setState({ listItem });
  }

  handleDecrement = list => {
    const listItem = this.state.listItem.map(item => {
      if (item.id === list.id) {
        const count = list.count - 1;
        return { ...list, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ listItem });
  }

  handleDelete = list => {
    const listItem = this.state.listItem.filter(item => item.id !== list.id);
    this.setState({ listItem })
  }

  handleAdd = name => {
    const listItem = [...this.state.listItem, { id: Date.now(), name, count: 0 }]
    this.setState({ listItem })
  }
  handleReset = list => {
    const listItem = this.state.listItem.map(item => {
      if (list.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    this.setState({ listItem });
  }

  render() {
    return (
      <div className="App">
        <Navbar
          totalCount={this.state.listItem.filter(item => item.count > 0).length}
        />
        <ListItem
          habit={this.state.listItem}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </div>
    )
  }
}
