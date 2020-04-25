import React from "react";
import Key from "./Key";

class Keypad extends React.Component {
    render() {
        const { keys, keyClicked } = this.props;
        return (
            <div className="keypad">
                {keys.map(element => (
                    <Key element={element} key={element.id} keyClicked={keyClicked} />
                ))}
            </div>
        );
    }
}

export default Keypad;
