import React from "react";

class Displayscreen extends React.Component {
    render() {
        return <div id="screen">{this.props.screenvalue}</div>;
    }
}

export default Displayscreen;
