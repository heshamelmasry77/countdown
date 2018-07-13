import React from "react";
import {Component} from "react";
// eslint-disable-next-line
import "./styles/Countdown.css";

class Countdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: "December 25, 2018",
			newDeadline: ""
		};
		this.changeDeadline = this.changeDeadline.bind(this);
	}
	
	changeDeadline() {
		// this.setState({
		// 	deadline: "November 25, 2018"
		// });
		console.log('state: ', this.state);
		this.setState({deadline:this.state.newDeadline});
	}
	
	render() {
		return (
			<div className="Countdown">
				<h1>Countdown to Black Friday</h1>
				<h2>
					Black Friday {this.state.deadline}
				</h2>
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
					<input placeholder='new date' onChange={(event)=> this.setState({newDeadline:event.target.value})}/>
					<button onClick={() => this.changeDeadline()}>
						Submit
					</button>
				</div>
			</div>
		);
	}
}

export default Countdown;
