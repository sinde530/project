import React, { useRef, useState } from "react";
import CreateUser from "./CreateUser";
import UserList from './UserList';

function RegisterForm() {

    const idRef = useRef(4);
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    });
    const { username, email } = inputs;

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }
    const onCreate = () => {
        const user = {
            id: idRef.current,
            username,
            email
        };
        setUsers(users.concat(user));

        setInputs({
            username: '',
            email: ''
        });
        idRef.current += 1;
    }
    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id))
    };

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'Crong',
            email: 'rlatjddms338@gmail.com',
        },
        {
            id: 2,
            username: 'SungEun',
            email: 'mirxx@gmail.com',
        },
        {
            id: 3,
            username: 'Sinde',
            email: 'sinde530@gmail.com',
        }
    ]);

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList
                users={users}
                onRemove={onRemove}
            />
        </>
    )
}

export default RegisterForm;
