import React from "react";

class Key extends React.Component {
    getStyle = () => {
        const title = this.props.element.Title;
        if (title === "Clear") {
            return {
                flexBasis: "75%"
            };
        } else if (title === "÷") {
            return {
                backgroundColor: "rgb(196, 60, 36)",
                flexBasis: "25%"
            };
        } else if (title === "-") {
            return {
                backgroundColor: "rgb(196, 60, 36)"
            };
        } else if (title === "+") {
            return {
                backgroundColor: "rgb(196, 60, 36)"
            };
        } else if (title === "=") {
            return {
                backgroundColor: "rgb(100, 60, 36)"
            };
        }
    };
    render() {
        const { id, Title } = this.props.element;
        const { keyClicked } = this.props;
        return (
            <button id="keys" style={this.getStyle()} onClick={() => keyClicked(id)}>
                {Title}
            </button>
        );
    }
}

export default Key;
