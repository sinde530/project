import React from "react";

export default function Map() {
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'qwer@naver.com'
        },
        {
            id: 2,
            username: 'Crong',
            email: 'asdf@naver.com'
        },
        {
            id: 3,
            username: 'sinde530',
            email: 'zxcv@naver.com'
        }
    ]
    return (
        <div>
            {users.map(user => (
                <User
                    user={user}
                    key={user.id}
                />
            ))}
        </div>
    )
}

function User({ user }) {
    return (
        <>
            <p>{user.username}</p>
            <span>{user.email}</span>
        </>
    )
}
