import React, { useEffect, useState } from "react";

function UseStateEx() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('sara');

    const counter = () => {
        setNumber(number + 1);
    }
    const nameChange = () => {
        setName('Mika');
    }

    useEffect(() => {
        document.title = `You clicked ${number} times`;
    });

    return (
        <div>
            <button onClick={counter}>click</button>
            <button onClick={nameChange}>change name</button>
            <p>{number}</p>
            <p>{name}</p>
        </div>
    );
}

export default UseStateEx;
