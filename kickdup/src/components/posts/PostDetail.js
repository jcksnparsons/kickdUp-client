import React, { useState, useEffect } from "react";
import PostManager from "../../modules/PostManager";
import CommentManager from "../../modules/CommentManager";
import CommentCard from "../comments/CommentCard";
import PhotoManager from "../../modules/PhotoManager";
import PhotoComponent from "../photos/PhotoComponent"

const PostDetail = (props) => {
  const postId = props.routerProps.match.params.postId;

  const [details, setDetails] = useState({
    manufacturer: { name: "" },
    model: "",
    colorway: "",
    description: "",
  });
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
      props.routerProps.history.push(`${props.routerProps.match.params.postId}`)
    );
  };

  const getComments = () => {
    CommentManager.getForPost(postId).then((resp) => setComments(resp));
  };

  const deleteComment = (comment_id) => {
    CommentManager.delete(comment_id).then(() => getComments());
  };

  const deletePhoto = (photo_id) => {
    PhotoManager.deletePhoto(photo_id).then(() => getPhotos())
  }

  useEffect(() => {
    getPost();
    getComments();
    getPhotos()
  }, []);

  return (
    <>
      {photos.map(photo => {return <PhotoComponent key={photo.id} photo={photo} deletePhoto={deletePhoto}/>})}
      <h1>{details.manufacturer.name}</h1>
      <h1>{details.model}</h1>
      <h1>{details.colorway}</h1>
      <em>
        <h1>{details.description}</h1>
      </em>
      <button onClick={() => deletePost()}>Delete Post</button>
      <form>
        <fieldset>
          <input
            type="text"
            onChange={handleFieldChange}
            id="content"
            placeholder="Add your comment here..."
          />
        </fieldset>

        <button type="submit" onClick={handleCommentSubmit}>
          Add comment
        </button>
      </form>
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
};

export default PostDetail;
