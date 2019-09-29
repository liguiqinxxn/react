import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // 为了在回调中使用`this`，这个绑定是必不可少的
    // this.handleClick = this.handleClick.bind(this);  //第一种
  }
  //第二种
  // handleClick = () => {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }));
  // };

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <button onClick={e => this.handleClick(e)}>
          {/* 第三种 */}
          {/* 此语法确保 `handleClick` 内的 `this` 已被绑定。 */}
          {/* 此语法问题在于每次渲染 LoggingButton
        时都会创建不同的回调函数。在大多数情况下，这没什么问题，但如果该回调函数作为
        prop
        传入子组件时，这些组件可能会进行额外的重新渲染。我们通常建议在构造器中绑定或使用
        class fields 语法来避免这类性能问题。 */}
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>

        <button onClick={this.handleClick.bind(this)}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}

export default Toggle;
