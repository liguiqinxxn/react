import React from "react";
import ReactDOM from "react-dom";
import "./toggle.js";
import Toggle from "./toggle.js";
import LoginControl from "./loginControl.js";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 1
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
    // this.setState({
    //   counter: this.state.counter + this.props.increment
    // });

    this.setState((state, props) => ({
      counter: state.counter + props.increment
    }));
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h1>{this.state.counter}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <Toggle></Toggle>
        <LoginControl />
      </div>
    );
  }
}

ReactDOM.render(<Clock increment={1} />, document.getElementById("root"));
