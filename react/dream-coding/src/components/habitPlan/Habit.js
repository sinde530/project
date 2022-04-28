import React, { Component } from "react";

export default class Habit extends Component {
    componentDidMount() {
        console.log(`item: $(this.props.item.name) mounted `)
    }
    componentWillUnmount() {
        console.log(`item: $(this.props.item.name) will mounted `)
    }

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
        const { name, count } = this.props.item;
        // console.log(this.props.handleIncrement)
        // undifined
        // console.log(this.props.item)
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
