import React, { memo } from "react";

const habitAddForm = memo(props => {

    // PureComponent props,state안에 들어있는 최상위에 있는 데이터가 변하지 않으면 render 호출X
    const inputRef = React.createRef();
    const formRef = React.createRef();

    const onSubmit = (e) => {
        e.preventDefault()
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    };

    return (
        <form className="add-form" ref={formRef} onSubmit={onSubmit} >
            <input
                ref={inputRef}
                type="text"
                className="add-input"
                placeholder="Habit"
            />
            <button className="add-button">Add</button>
        </form>
    );
});

export default habitAddForm;
