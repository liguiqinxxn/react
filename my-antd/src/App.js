import React, { Component } from "react";
// import Button from "antd/lib/button";
// import "antd/dist/antd.css";
import { Button } from "antd";
import "./App.css";
import ComponentList from "./component/componentList.js";
import Lifecycle from "./component/Lifecycle.js";
import Hoc from "./component/Hoc.js";
import HookTest from "./component/HookTest.js";
import ContextTest from "./component/ContextTest.js";
import KForm from "./component/KForm.js";

class App extends Component {
  state = { prop: "some prop" };
  componentDidMount() {
    this.setState({ prop: "a new prop" });
    setTimeout(() => {
      this.setState({ prop: "" });
    }, 2000);
  }
  render() {
    return (
      <div className="App">
        {/* <Button type="primary">按钮</Button> */}
        {/* <ComponentList /> */}
        {/* 生命周期 */}
        {/* {this.state.prop && <Lifecycle prop={this.state.prop} />} */}

        {/* 高阶组件 */}
        {/* <Hoc></Hoc> */}

        {/* HOOk */}
        {/* <HookTest></HookTest> */}

        {/* context */}
        {/* <ContextTest></ContextTest> */}

        {/* 表单 */}
        <KForm />
      </div>
    );
  }
}

export default App;
