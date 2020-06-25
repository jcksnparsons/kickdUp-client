import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavBar from "./components/nav/Navbar";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BodyRouter from "./components/BodyRouter";

ReactDOM.render(
  <Router>
    <Route render={(props) => <NavBar {...props} />} />
    <BodyRouter />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
