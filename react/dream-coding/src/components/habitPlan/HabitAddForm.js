import React, { PureComponent } from "react";

export default class HabitAddForm extends PureComponent {
    // PureComponent props,state안에 들어있는 최상위에 있는 데이터가 변하지 않으면 render 호출X
    inputRef = React.createRef();
    formRef = React.createRef();

    onSubmit = (e) => {
        e.preventDefault()
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
    };

    render() {

        return (
            <form className="add-form" ref={this.formRef} onSubmit={this.onSubmit} >
                <input
                    ref={this.inputRef}
                    type="text"
                    className="add-input"
                    placeholder="Habit"
                />
                <button className="add-button">Add</button>
            </form>
        );
    }
}
