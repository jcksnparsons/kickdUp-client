import React from 'react'

const CommentCard = (props) => {
  return (
    <>
      <h2>{props.comment.content}</h2>
      <button onClick={() => props.deleteComment(props.comment.id)}>Delete</button>
    </>
  );
};

export default CommentCard