import React from "react";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";


function Hello({ name, isLoggedIn }) {
    return (
        <div>
            {isLoggedIn ? <UserGreeting name={name} /> : <GuestGreeting />}
        </div>
    )
}

export default Hello;
