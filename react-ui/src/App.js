// @flow
import React, { Component } from "react";
import { I18n } from "react-i18next";
import "./stylesheets/App.css";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <I18n ns="translations">
        {
          (t, { i18n }) => (
            <div className="App">
              <div className="App-Header">
                <h5>{t("h5")}</h5>
                <button onClick={() => i18n.changeLanguage("de")}>de</button>
                <button onClick={() => i18n.changeLanguage("en")}>en</button>
              </div>
              <Routes/>
            </div>
          )
        }
      </I18n>
    );
  }
}

export default App;
