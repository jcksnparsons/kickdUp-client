import React, { useState, useEffect } from "react";
import UserManager from "../../modules/UserRetrieve";
import PostManager from "../../modules/PostManager";
import PostCard from "../posts/PostCard";
import { Button } from "reactstrap"

const Profile = ({ routerProps, currentUser }) => {
  const [user, setUser] = useState({ username: "" });
  const [userPosts, setUserPosts] = useState([]);

  const userId = routerProps.match.params.userId;

  const getUser = (user_id) => {
    UserManager.userRetrieve(user_id).then((resp) => setUser(resp));
  };

  const getPosts = (user_id) => {
    PostManager.getFilteredByUser(user_id).then((resp) => setUserPosts(resp));
  };

  useEffect(() => {
    getUser(userId);
    getPosts(userId);
  }, [userId, currentUser]);

  const createPosts = (postArray) => {
    if (postArray.length > 0) {
      return postArray.map((post) => {
        return <PostCard key={post.id} post={post} routerProps={routerProps} />;
      });
    }
  };

  return (
    <div>
      <h1>{user.username}</h1>
      {currentUser && currentUser.id === user.id ? <Button onClick={() => routerProps.history.push("/newpost")}>Add a new post</Button> : null}
      {user.username ? createPosts(userPosts) : null}
    </div>
  );
};

export default Profile;
