// import React, { Component } from "react";

// class Hello extends Component {
//     render() {
//         return <>{this.props.name}</>
//     }
// }
// export default Hello;

// import React from "react";

// function Hello(props) {
//     return (
//         <div>
//             {props.firstName}
//             {props.endName}
//         </div>
//     );
// }

// export default Hello;

import React from "react";

function Hello({ firstName, endName }) {
    return (
        <div>
            <p>{firstName}</p>
            <p>{endName}</p>
        </div>
    )
}

Hello.defaultProps = {
    firstName: 'kim',
    endName: 'sung eun',
}

export default Hello;

