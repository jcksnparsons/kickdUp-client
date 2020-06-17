import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./auth_and_login/Register";

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
    </Switch>
  );
};

export default BodyRouter;
