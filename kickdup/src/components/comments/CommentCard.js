import React from 'react'

const CommentCard = (props) => {
  return (
    <>
      <h2>{props.comment.content}</h2>
    </>
  );
};

export default CommentCard