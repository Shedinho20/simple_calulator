import React from "react";

const Displayscreen = props => {
    const { screenvalue, onKeyDown } = props;
    return (
        <div>
            <input id="screen" type="number" value={screenvalue} onChange={onKeyDown} readOnly="readOnly"></input>
        </div>
    );
};

export default Displayscreen;
