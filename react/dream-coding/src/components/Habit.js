import React, { Component } from "react";

export default class Habit extends Component {
    render() {
        return (
            <div className="habit-container">
                <span className="habit-name">Reading</span>
                <span className="habit-count">8</span>
                <button className="habit-button habit-increase">
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease">
                    <i className="fas fa-plus-minus"></i>
                </button>
                <button className="habit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        )
    }
}
