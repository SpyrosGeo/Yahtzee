import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps={
     numberToWord:["one","two","three","four","five","six"]
  };
  constructor(props){
    super(props);
    this.newHandleClick = this.newHandleClick.bind(this);
  }
  newHandleClick(){
    this.props.handleClick(this.props.idx);
  }
  render() {
    this.props.numberToWord[this.props.val-1]
    let classes = ` Die fas fa-dice-${this.props.numberToWord[this.props.val - 1]} fa-5x `;
    if(this.props.locked) classes +="Die-locked"
    return (
      <i
        className={classes}
        onClick={this.newHandleClick}
      >
        {/* {this.props.val} */}
      </i>
    );
  }
}

export default Die;
