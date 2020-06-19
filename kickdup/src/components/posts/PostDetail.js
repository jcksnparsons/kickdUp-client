import React, { useState, useEffect } from "react";
import PostManager from "../../modules/PostManager";

const PostDetail = (props) => {
  console.log(props);
  const postId = props.routerProps.match.params.postId;

  const [details, setDetails] = useState({
    manufacturer: { name: "" },
    model: "",
    colorway: "",
    description: "",
  });

  const getPost = () => {
    console.log(props.routerProps)
    PostManager.getOne(postId).then((resp) => {
      setDetails(resp);
    });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <h1>{details.manufacturer.name}</h1>
      <h1>{details.model}</h1>
      <h1>{details.colorway}</h1>
      <em>
        <h1>{details.description}</h1>
      </em>
    </>
  );
};

export default PostDetail;
