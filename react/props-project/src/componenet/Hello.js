// import React, { Component } from "react";

// class Hello extends Component {
//     render() {
//         return <>{this.props.name}</>
//     }
// }
// export default Hello;

import React from "react";

function Hello(props) {
    return <div>{props.name}</div>;
}

export default Hello;
