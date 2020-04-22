import React from "react";
import "./App.css";
import Keypad from "./comp/Keypad";
import Screen from "./comp/Displayscreen";

class App extends React.Component {
    state = {
        screenvalue: "",
        valueenter: "",
        keyrow1: [
            {
                id: 0,
                Title: "Clear"
            },
            {
                id: 10,
                Title: "÷"
            },
            {
                id: 7,
                Title: "7"
            },
            {
                id: 8,
                Title: "8"
            },
            {
                id: 9,
                Title: "9"
            },
            {
                id: 11,
                Title: "-"
            },
            {
                id: 4,
                Title: "4"
            },
            {
                id: 5,
                Title: "5"
            },
            {
                id: 6,
                Title: "6"
            },
            {
                id: 12,
                Title: "+"
            },
            {
                id: 1,
                Title: "1"
            },
            {
                id: 2,
                Title: "2"
            },
            {
                id: 3,
                Title: "3"
            },
            {
                id: 13,
                Title: "="
            }
        ]
    };
    keydown = e => {
        console.log("é");
    };
    keyClicked = id => {
        if (id !== 13 && id !== 11 && id !== 12 && id !== 10 && id !== 0) {
            this.setState({ screenvalue: this.state.screenvalue + id });
        } else if (id === 0) {
            this.clear();
        } else if (id === 12) {
            this.addittion();
        } else if (id === 13) {
            this.cal();
        } else if (id === 10) {
            this.divide();
        } else if (id === 11) {
            this.minus();
        }
    };

    addittion = () => {
        this.setState({ valueenter: this.state.valueenter.concat(this.state.screenvalue) + "+" });
        this.setState({ screenvalue: "" });
    };
    multiply = () => {
        this.setState({ valueenter: this.state.valueenter.concat(this.state.screenvalue) + "*" });
        this.setState({ screenvalue: "" });
    };
    minus = () => {
        this.setState({ valueenter: this.state.valueenter.concat(this.state.screenvalue) + "-" });
        this.setState({ screenvalue: "" });
    };
    divide = () => {
        this.setState({ valueenter: this.state.valueenter.concat(this.state.screenvalue) + "/" });
        this.setState({ screenvalue: "" });
    };

    async cal() {
        await this.setState({ valueenter: this.state.valueenter.concat(this.state.screenvalue) });
        this.setState({ screenvalue: eval(this.state.valueenter) });
        this.setState({ valueenter: "" });
    }

    clear() {
        this.setState({ screenvalue: "" });
        this.setState({ valueenter: "" });
    }

    render() {
        return (
            <div className="App">
                <div className="calculator">
                    <Screen screenvalue={this.state.screenvalue} />
                    <Keypad keyClicked={this.keyClicked} keyrow1={this.state.keyrow1} keydown={this.keydown} />
                </div>
            </div>
        );
    }
}

export default App;
