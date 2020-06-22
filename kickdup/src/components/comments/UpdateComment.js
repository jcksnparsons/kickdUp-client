import React, { useState, useEffect } from "react";
import CommentManager from "../../modules/CommentManager";

const UpdateCommentForm = (props) => {
  const [commentInfo, setCommentInfo] = useState({});

  const getCommentInfo = () => {
    CommentManager.getComment(
      parseInt(props.routerProps.match.params.commentId)
    ).then((resp) => setCommentInfo(resp));
  };

  const handleFieldChange = (evt) => {
    const stateToChange = { ...commentInfo };
    stateToChange[evt.target.id] = evt.target.value;
    setCommentInfo(stateToChange);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    CommentManager.editComment(commentInfo.id, commentInfo.content).then(
      () => props.routerProps.history.push(`/posts/${commentInfo.post_id}`)
    );
  };

  useEffect(() => {
    getCommentInfo();
  }, []);

  return (
    <form>
      <h1>Edit Comment</h1>
      <input
        type="test"
        onChange={handleFieldChange}
        id="content"
        placeholder={commentInfo.content}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default UpdateCommentForm;
