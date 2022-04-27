import React, { Component } from "react";
import Habit from "./Habit";

export default class ListItem extends Component {
    state = {
        lists: [
            { id: 1, name: 'Reading', count: 0 },
            { id: 2, name: 'Running', count: 0 },
            { id: 3, name: 'Coding', count: 0 },
        ]
    }

    handleIncrement = (list) => {
        console.log(`handleIncrement ${list.name}`);
    }
    handleDecrement = (list) => {
        console.log(`handleDecrement ${list.name}`);
    }

    handleDelete = (list) => {
        console.log(`handleDelete ${list.name}`);
    }

    render() {

        return (
            <div>
                <ul>
                    {this.state.lists.map(list => (
                        // list 데이터 key값 전달
                        <Habit
                            key={list.id}
                            list={list}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                        />
                    ))}
                </ul>

            </div>
        )
    }
}
