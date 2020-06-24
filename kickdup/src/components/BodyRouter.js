import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./auth_and_login/Register";
import Login from "./auth_and_login/Login";
import Profile from "./user_profile/Profile";
import PostAddForm from "./posts/PostAddForm";
import PostDetail from "./posts/PostDetail";
import UpdateCommentForm from "./comments/UpdateComment";
import PhotoAddForm from "./photos/PhotoAddForm";
import AllPostsView from "./posts/AllPosts";

const BodyRouter = (props) => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routerProps) => {
          return <AllPostsView routerProps={routerProps} />;
        }}
      />
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
      <Route
        exact
        path="/posts/:postId(\d+)"
        render={(routerProps) => {
          return <PostDetail routerProps={routerProps} />;
        }}
      />
      <Route
        exact
        path="/posts/:postId(\d+)/addphoto"
        render={(routerProps) => {
          return <PhotoAddForm routerProps={routerProps} />;
        }}
      />
      <Route
        path="/comments/:commentId(\d+)/edit"
        render={(routerProps) => {
          return <UpdateCommentForm routerProps={routerProps} />;
        }}
      />
    </Switch>
  );
};

export default BodyRouter;
