import React, { Component } from "react";
import Welcome from "./components/welcome";
import Login from "./components/login";
import Register from "./components/register";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard";
import DogsPage from "./components/dogsPage";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/dogsPage/:dogName" component={DogsPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
