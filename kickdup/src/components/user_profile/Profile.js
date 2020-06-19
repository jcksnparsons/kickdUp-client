import React, { useState, useEffect } from "react";
import UserRetrieve from "../../modules/UserRetrieve";
import PostManager from "../../modules/PostManager";
import PostCard from "../posts/PostCard";

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
    if (postArray.length > 0) {
      return postArray.map((post) => {
          console.log(post)
        return <PostCard key={post.id} post={post} />;
      });
    }
  };

  return (
    <div>
      <h1>{user.username}</h1>
      {user.username ? createPosts(userPosts) : null}
    </div>
  );
};

export default Profile;