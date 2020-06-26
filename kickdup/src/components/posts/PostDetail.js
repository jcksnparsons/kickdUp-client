import React, { useState, useEffect } from "react";
import PostManager from "../../modules/PostManager";
import CommentManager from "../../modules/CommentManager";
import CommentCard from "../comments/CommentCard";
import PhotoManager from "../../modules/PhotoManager";
import PhotoComponent from "../photos/PhotoComponent";
import {
  Spinner,
  Card,
  Button,
  CardTitle,
  Form,
  Input,
  CardSubtitle,
  CardText,
} from "reactstrap";

const PostDetail = (props) => {
  const postId = props.routerProps.match.params.postId;

  const [details, setDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [newCommentContent, setNewCommentContent] = useState({
    post_id: postId,
    content: "",
  });
  const [photos, setPhotos] = useState([]);

  const getPost = () => {
    PostManager.getOne(postId).then((resp) => {
      setDetails(resp);
    });
  };

  const getPhotos = () => {
    PhotoManager.getPhotosForPost(
      props.routerProps.match.params.postId
    ).then((resp) => setPhotos(resp));
  };

  const handleFieldChange = (evt) => {
    const stateToChange = { ...newCommentContent };
    stateToChange[evt.target.id] = evt.target.value;
    setNewCommentContent(stateToChange);
  };

  const handleCommentSubmit = () => {
    CommentManager.post(newCommentContent);
  };

  const deletePost = () => {
    PostManager.deletePost(postId).then(
      props.routerProps.history.push(`/users/${props.currentUser.id}`)
    );
  };

  const getComments = () => {
    CommentManager.getForPost(postId).then((resp) => setComments(resp));
  };

  const deleteComment = (comment_id) => {
    CommentManager.delete(comment_id).then(() => getComments());
  };

  const deletePhoto = (photo_id) => {
    PhotoManager.deletePhoto(photo_id).then(() => getPhotos());
  };

  const makeButtons = () => {
    if (details !== null && props.currentUser !== null) {
      return props.currentUser.id === details.user_id ? (
        <div>
          <Button
            style={{ margin: ".5rem" }}
            onClick={() =>
              props.routerProps.history.push(`/posts/${details.id}/addphoto`)
            }
          >
            Add Photo
          </Button>
          <Button style={{ margin: ".5rem" }} onClick={() => deletePost()}>
            Delete Post
          </Button>
          <Button
            style={{ margin: ".5rem" }}
            onClick={() =>
              props.routerProps.history.push(`/posts/${details.id}/edit`)
            }
          >
            Edit Post
          </Button>
        </div>
      ) : null;
    }
  };

  useEffect(() => {
    getPost();
    getComments();
    getPhotos();
  }, []);

  if (details !== null) {
    return (
      <>
        <Card>
          {photos.map((photo) => {
            return (
              <PhotoComponent
                key={photo.id}
                photo={photo}
                deletePhoto={deletePhoto}
                {...props}
              />
            );
          })}
          
          <CardTitle>{details.manufacturer.name}</CardTitle>
          <CardTitle>{details.model}</CardTitle>
          <CardTitle>{details.colorway}</CardTitle>
          <br />
          <em>
            <CardSubtitle style={{display: 'flex', justifyContent: 'space-around'}}>{details.description}</CardSubtitle>
          </em>
          <br />
          <CardText>
            Posted by <em>{details.user.username}</em>
          </CardText>
        </Card>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {makeButtons()}
        </div>
        <Form>
          <Input
            type="text"
            onChange={handleFieldChange}
            id="content"
            placeholder="Add your comment here..."
          />

          <Button style={{margin: '.5rem'}} type="submit" onClick={handleCommentSubmit}>
            Add comment
          </Button>
        </Form>
        {comments.map((comment) => {
          return (
            <CommentCard
              comment={comment}
              deleteComment={deleteComment}
              {...props}
            />
          );
        })}
      </>
    );
  } else {
    return <Spinner></Spinner>;
  }
};

export default PostDetail;
