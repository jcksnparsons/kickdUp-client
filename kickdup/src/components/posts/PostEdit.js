import React, { useState, useEffect } from "react";
import PostManager from "../../modules/PostManager";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

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
    <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
      <Form style={{width: '80%'}}>
        <FormGroup>
          <Label>Edit Description</Label>
          <Input
            type="text"
            onChange={handleFieldChange}
            id="description"
            placeholder={post.description}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
      </div>
    </>
  );
};

export default PostEditForm;
