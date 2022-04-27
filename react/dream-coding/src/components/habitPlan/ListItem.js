import React, { Component } from "react";
import Habit from "./Habit";
import HabitAddForm from "./HabitAddForm";

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

    handleAdd = name => {
        this.props.onAdd(name);
    }

    render() {
        // console.log(this.handleIncrement)
        // check
        return (
            <>
                <HabitAddForm onAdd={this.handleAdd} />
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
                <button className="reset-btn" onClick={this.props.onReset}>Reset All</button>
            </>
        )
    }
}
