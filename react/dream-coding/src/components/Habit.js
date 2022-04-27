import React, { Component } from "react";

export default class Habit extends Component {
    // components 안에서 정의한 컴포넌트 오브젝트
    state = {
        count: 0,
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }
    handleDecrement = () => {
        const count = this.state.count - 1;
        // 0보다 작으면 count를 출력
        this.setState({ count: count < 0 ? 0 : count })
    }

    render() {
        return (
            <div className="habit-container">
                <span className="habit-name">Reading</span>
                <span className="habit-count">{this.state.count}</span>
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
                >
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        )
    }
}
