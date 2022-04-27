import React, { Component } from "react";

export default class Habit extends Component {
    // components 안에서 정의한 컴포넌트 오브젝트
    // state = {
    //     count: 0,
    // };

    handleIncrement = () => {
        this.props.onIncrement(this.props.list)
    }
    handleDecrement = () => {
        this.props.onDecrement(this.props.list)
    }

    handleDelete = () => {
        this.props.onDelete(this.props.list)
    }

    render() {
        // console.log(this.props);
        // const habitName = this.props.list.name;
        const { name, count } = this.props.list;
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
