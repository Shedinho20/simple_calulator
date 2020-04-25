import React from "react";

const Displayscreen = props => {
    const { screenvalue, onKeyDown } = props;
    return (
        <div>
            <input id="screen" type="number" value={screenvalue} onChange={onKeyDown} readonly="readonly"></input>
        </div>
    );
};

export default Displayscreen;
