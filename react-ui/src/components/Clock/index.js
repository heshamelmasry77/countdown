import React from "react";
import {Component} from "react";
// eslint-disable-next-line
import "./styles/Clock.css";

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		};
		console.log('this.props: ',this.props);
	}
	
	
	render() {
		return (
			<div className="Clock">
				<div className="values-container">
					<div className="clock-days"><span className="date-values">{this.state.days}</span><span
						className="date-names">days</span></div>
					<div className="clock-hours"><span className="date-values">{this.state.hours}</span> <span
						className="date-names">hours</span></div>
					<div className="clock-minutes"><span className="date-values">{this.state.minutes}</span> <span
						className="date-names">minutes</span></div>
					<div className="clock-seconds"><span className="date-values">{this.state.seconds}</span> <span
						className="date-names">seconds</span></div>
				</div>
			</div>
		);
	}
}

export default Clock;
