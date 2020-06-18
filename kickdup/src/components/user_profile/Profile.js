import React, { useState, useEffect } from "react";
import UserRetrieve from "../../modules/UserRetrieve";

const Profile = ({ routerProps }) => {
  const [user, setUser] = useState({ username: "" });
  const [userPosts, setUserPosts] = useState([]);

  const getUser = (user_id) => {
    UserRetrieve(user_id).then((resp) => setUser(resp));
  };

  useEffect(() => {
    getUser(routerProps.match.params.userId);
  }, []);

  console.log(routerProps)

  return (
      <h1>{user.username}</h1>
  )
};

export default Profile