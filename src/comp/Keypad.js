import React from "react";
import Key from "./Key";

class Keypad extends React.Component {
    style = () => {};
    render() {
        return (
            <div className="keypad">
                {this.props.keyrow1.map(element => (
                    <Key element={element} key={element.id} style={this.style()} keyClicked={this.props.keyClicked} />
                ))}
            </div>
        );
    }
}

export default Keypad;
