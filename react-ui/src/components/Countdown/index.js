import React from "react";
import {Component} from "react";
// eslint-disable-next-line
import "./styles/Countdown.css";
import Clock from "../Clock";

class Countdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: "November 23, 2018",
			newDeadline: ""
		};
		this.changeDeadline = this.changeDeadline.bind(this);
	}
	
	changeDeadline() {
		// this.setState({
		// 	deadline: "November 25, 2018"
		// });
		console.log("state: ", this.state);
		this.setState({deadline: this.state.newDeadline});
	}
	
	render() {
		return (
			<div className="Countdown">
				<h1>Countdown to Black Friday</h1>
				<h2>
					Black Friday {this.state.deadline}
				</h2>
				<Clock
					deadline={this.state.deadline}
				/>
				<div>
					{/*<input placeholder='new date'*/}
					       {/*onChange={(event) => this.setState({newDeadline: event.target.value})}/>*/}
					{/*<button onClick={() => this.changeDeadline()}>*/}
						{/*Submit*/}
					{/*</button>*/}
				</div>
			</div>
		);
	}
}

export default Countdown;
