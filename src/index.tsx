import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";
import Router from "core/router";
import store from "core/redux";

import "assets/css/style.scss";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
