import React, { Component } from "react";
import Habit from "./Habit";

export default class ListItem extends Component {
    handleIncrement = list => {
        this.props.onIncrement(list)
    }

    handleDecrement = list => {
        this.props.onDecrement(list)
    }

    handleDelete = list => {
        this.props.onDelete(list)
    }

    render() {
        // console.log(this.handleIncrement)
        // check
        return (
            <div>
                <ul>
                    {this.props.habit.map(list => (
                        // list 데이터 key값 전달
                        <Habit
                            key={list.id}
                            item={list}
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
