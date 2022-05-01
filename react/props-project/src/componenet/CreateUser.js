import React from "react";

function CreateUser({ username, email, onChange, onCreate }) {
    return (
        <div>
            <input
                name="username"
                placeholder="Your Name"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="Your Email"
                onChange={onChange}
                value={email}
            />
            <button
                onClick={onCreate}
            >
                Submit
            </button>
        </div>
    )
}

export default CreateUser;
