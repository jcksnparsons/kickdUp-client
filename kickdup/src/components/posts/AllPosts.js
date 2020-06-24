import React, { useState, useEffect } from "react";
import PostCard from "../posts/PostCard";
import PostManager from "../../modules/PostManager";

const AllPostsView = (routerProps) => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    PostManager.getAll().then((resp) => setPosts(resp));
  };

  const createPostCards = (arr) => {
    if (arr.length > 0) {
      return arr.map((post) => {
        return <PostCard key={post.id} post={post} routerProps={routerProps} />;
      });
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return <>{createPostCards(posts)}</>;
};

export default AllPostsView