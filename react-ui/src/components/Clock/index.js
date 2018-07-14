import React from "react";
// eslint-disable-next-line
import "./styles/Clock.css";
import { Component } from "react";
import PropTypes from 'prop-types';


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    this.getTimeUntil = this.getTimeUntil.bind(this);
    this.leadingZero = this.leadingZero.bind(this);
  }

  componentWillMount() {//life cycle hook
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {//after the component is completely rendered to the application
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leadingZero(num) {
    return num < 10 ? "0" + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());

    const seconds = Math.floor((time / 1000) % 60);

    const minutes = Math.floor((time / 1000 / 60) % 60);

    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }

  render() {
    return (
      <div className="Clock">
        <h5>starts in</h5>
        <div className="values-container">
          <div className="clock-days"><span className="date-values">{this.leadingZero(this.state.days)}</span><span
            className="date-names">days</span></div>

          <div className="clock-hours"><span
            className="date-values">{this.leadingZero(this.state.hours)}</span> <span
            className="date-names">hours</span></div>

          <div className="clock-minutes"><span
            className="date-values">{this.leadingZero(this.state.minutes)}</span> <span
            className="date-names">minutes</span></div>

          <div className="clock-seconds"><span
            className="date-values">{this.leadingZero(this.state.seconds)}</span> <span
            className="date-names">seconds</span></div>
        </div>
      </div>
    );
  }
}
Clock.propTypes = {
  deadline: PropTypes.string
};
export default Clock;
