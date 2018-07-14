// @flow
import React, { Component } from "react";
import Routes from "./routes";
import "./stylesheets/App.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_de from "./translations/de/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: "en",                              // language to use
  resources: {
    en: {
      common: common_en               // 'common' is our custom namespace
    },
    de: {
      common: common_de
    }
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <I18nextProvider i18n={i18next}>
          <Routes/>
        </I18nextProvider>
      </div>
    );
  }
}

export default App;
