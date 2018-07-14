import React from "react";
import { Component } from "react";
// eslint-disable-next-line
import "./styles/Countdown.css";
import Clock from "../Clock";
import Headings from "../Headings";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "November 23, 2018"
    };
  }

  render() {
    return (
      <div className="Countdown">
        <Headings deadline={this.state.deadline}/>
        <Clock
          deadline={this.state.deadline}
        />
      </div>
    );
  }
}

export default Countdown;
