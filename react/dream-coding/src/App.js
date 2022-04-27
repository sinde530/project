import React, { Component } from "react";
import './App.css';
import Index from './components/habitPlan';
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

  render() {
    return (
      <div className="App">
        {/* <Navbar totalCount={this.props.item.filter(item => item.count > 0)} /> */}
        <ListItem
          habit={this.state.listItem}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </div>
    )
  }
}
