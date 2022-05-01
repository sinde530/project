import React from "react";

function User({ user, onRemove }) {
    return (
        <>
            <p><b>{user.username}</b> {user.email}</p>
            <button
                onClick={() => {
                    onRemove(user.id)
                }}>
                delete
            </button>
        </>
    )
}

function UserList({ users, onRemove }) {

    return (
        <div>
            {users.map(user => (
                <User
                    user={user}
                    key={user.id}
                    onRemove={onRemove}
                />
            ))}
        </div>
    )
}

export default UserList;
