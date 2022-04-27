import React, { Component } from "react";

export default class Habit extends Component {
    // components 안에서 정의한 컴포넌트 오브젝트
    // state = {
    //     count: 0,
    // };

    handleIncrement = () => {
        this.props.onIncrement(this.props.item)
    }
    handleDecrement = () => {
        this.props.onDecrement(this.props.item)
    }

    handleDelete = () => {
        this.props.onDelete(this.props.item)
    }

    render() {
        // console.log(this.props);
        // const habitName = this.props.item.name;
        const { name, count } = this.props.item;
        return (
            <div className="habit-container">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button
                    className="habit-button habit-increase"
                    onClick={this.handleIncrement}
                >
                    <i className="fas fa-plus-square"></i>
                </button>
                <button
                    className="habit-button habit-decrease"
                    onClick={this.handleDecrement}
                >
                    <i className="fas fa-minus"></i>
                </button>
                <button
                    className="habit-button habit-delete"
                    onClick={this.handleDelete}
                >
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        )
    }
}
