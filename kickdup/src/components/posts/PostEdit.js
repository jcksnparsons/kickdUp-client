import React, { useState, useEffect } from "react";
import PostManager from "../../modules/PostManager";

const PostEditForm = (props) => {
  const [post, setPost] = useState({});

  const getPostToEdit = () => {
    PostManager.getOne(props.routerProps.match.params.postId).then((resp) =>
      setPost(resp)
    );
  };

  const handleFieldChange = (evt) => {
    const stateToChange = { ...post };
    stateToChange[evt.target.id] = evt.target.value;
    setPost(stateToChange);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    PostManager.editPost(post.id, post.description).then(() =>
      props.routerProps.history.push(`/posts/${post.id}`)
    );
  };

  useEffect(() => {
    getPostToEdit();
  }, []);

  return (
    <>
      <form>
        <h1>Edit Description</h1>
        <input
          type="text"
          onChange={handleFieldChange}
          id="description"
          placeholder={post.description}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default PostEditForm;
