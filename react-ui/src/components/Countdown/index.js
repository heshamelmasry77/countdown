import React from "react";
import {Component} from "react";
// eslint-disable-next-line
import "./styles/Countdown.css";

class Countdown extends Component {
	render() {
		return (
			<div className="Countdown">
				<h1>Countdown to Black Friday</h1>
				<div className="values-container">
					<div className="clock-days"><span className="date-values">27</span><span
						className="date-names">days</span></div>
					<div className="clock-hours"><span className="date-values">37</span> <span
						className="date-names">hours</span></div>
					<div className="clock-minutes"><span className="date-values">2</span> <span
						className="date-names">minutes</span></div>
					<div className="clock-seconds"><span className="date-values">22</span> <span
						className="date-names">seconds</span></div>
				</div>
				<div>
					<input placeholder='new date'/>
					<button>Submit</button>
				</div>
			</div>
		);
	}
}

export default Countdown;
