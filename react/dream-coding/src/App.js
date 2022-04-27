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
    // ...this = 새로운 배열을 만듬
    const listItem = [...this.state.listItem];
    const index = listItem.indexOf(list);
    listItem[index].count++;
    this.setState({ listItem });
  }

  handleDecrement = list => {
    const listItem = [...this.state.listItem];
    const index = listItem.indexOf(list);
    const count = listItem[index].count - 1;
    listItem[index].count = count < 0 ? 0 : count;
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
  handleReset = () => {
    const listItem = this.state.listItem.map(list => {
      list.count = 0;
      return list;
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
