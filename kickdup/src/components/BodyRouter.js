import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./auth_and_login/Register";
import Login from "./auth_and_login/Login";
import Profile from "./user_profile/Profile";
import PostAddForm from "./posts/PostAddForm";

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
      <Route
        exact
        path="/users/:userId(\d+)"
        render={(routerProps) => {
          return <Profile routerProps={routerProps} />;
        }}
      />
      <Route
        exact
        path="/newpost"
        render={(routerProps) => {
          return <PostAddForm routerProps={routerProps} />;
        }}
      />
    </Switch>
  );
};

export default BodyRouter;
