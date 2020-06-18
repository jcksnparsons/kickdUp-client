import React, { useState, useEffect } from "react";
import UserRetrieve from "../../modules/UserRetrieve";
import PostManager from "../../modules/PostManager";

const Profile = ({ routerProps }) => {
  const [user, setUser] = useState({ username: "" });
  const [userPosts, setUserPosts] = useState([]);

  const getUser = (user_id) => {
    UserRetrieve(user_id).then((resp) => setUser(resp));
  };

  const getPosts = (user_id) => {
    PostManager.getFilteredByUser(user_id).then((resp) => setUserPosts(resp));
  };

  useEffect(() => {
    const userId = routerProps.match.params.userId;

    getUser(userId);
    getPosts(userId);
  }, []);

  const createPosts = (postArray) => {
    return postArray.map((post) => {
    return <p>{post.manufacturer.name}<br/>{post.model}<br/>{post.colorway}<br/><em>{post.description}</em></p>;
    });
  };

  return (
    <div>
      <h1>{user.username}</h1>
      {createPosts(userPosts)}
    </div>
  );
};

export default Profile;
