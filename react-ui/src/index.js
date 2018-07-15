import React from "react";
import ReactDOM from "react-dom";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./stylesheets/index.css";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './i18n';


ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
