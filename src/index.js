import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";
import axios from "axios";
import { App } from "./app";

axios.defaults.baseURL = "https://swapi.co/api";
export const history = createBrowserHistory();

const Index = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
