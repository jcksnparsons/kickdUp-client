import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./auth_and_login/Register";
import Login from "./auth_and_login/Login";

const BodyRouter = (props) => {
  return (
    <Switch>
      <Route
        exact
        path="/register"
        render={(routerProps) => {
          return <Register routerProps={routerProps} />;
        }}
      />
      <Route
        exact
        path="/login"
        render={(routerProps) => {
          return <Login routerProps={routerProps} />;
        }}
      />
    </Switch>
  );
};

export default BodyRouter;
