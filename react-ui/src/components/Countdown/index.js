import React from "react";
import { Component } from "react";
// eslint-disable-next-line
import "./styles/Countdown.css";
import Clock from "../Clock";
import Headings from "../Headings";
import { translate, Trans } from "react-i18next";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "November 23, 2018"
    };
  }

  render() {
    const { t, i18n } = this.props;

    return (
      <div className="Countdown">
        <h1 className="App-title">
          { this.props.t('welcome.title', { framework: "react-i18next" }) }
        </h1>
        <button onClick={() => i18n.changeLanguage('de')}>de</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
        <Headings deadline={this.state.deadline}/>
        <Clock
          deadline={this.state.deadline}
        />
      </div>
    );
  }
}

export default translate('common')(Countdown);   // instead of "export default App;"
