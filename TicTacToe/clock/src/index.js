import React from "react";
import ReactDOM from "react-dom";
import "./toggle.js";
import Toggle from "./toggle.js";
import LoginControl from "./loginControl.js";
import Mailbox from "./mailbox.js";
import Page from "./page.js";
import NumberList from "./numberList.js";
import Blog from "./blog.js";
import NameForm from "./nameForm.js";
import FlavorForm from "./flavorForm.js";
import Reservation from "./reservation.js";
import Calculator from "./boilingVeraict.js";
import SignUpDialog from "./dialog.js";
import Button from "antd/lib/button";
import "antd/dist/antd.css";
// import "App.css";

const messages = ["React", "Re:React", "Re:Re:React"];
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers, index) => (
  <li key={index}>{numbers}</li>
));

const posts = [
  { id: 1, title: "Hello world", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." }
];

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
        <Mailbox unreadMessages={messages} />
        <Page />
        <ul>{listItems}</ul>
        <NumberList numbers={numbers} />
        <Blog posts={posts} />
        <form>
          <label>
            名字：
            <input type="text" name="name" />
          </label>
          <input type="submit" value="提交" />
        </form>
        <NameForm></NameForm>
        <FlavorForm />
        <Reservation />
        <Calculator />
        <SignUpDialog />
        <Button type="primary">按钮</Button>
      </div>
    );
  }
}

ReactDOM.render(<Clock increment={1} />, document.getElementById("root"));
