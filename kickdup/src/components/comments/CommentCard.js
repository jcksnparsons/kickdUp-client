import React from "react";

const CommentCard = (props) => {

  return (
    <>
      <h4>
        <em>{props.comment.user.username}</em>
      </h4>
      <h2>{props.comment.content}</h2>
      {props.currentUser.id === props.comment.user_id ? (
        <div>
          <button
            onClick={() =>
              props.routerProps.history.push(
                `/comments/${props.comment.id}/edit`
              )
            }
          >
            Edit
          </button>
          <button onClick={() => props.deleteComment(props.comment.id)}>
            Delete
          </button>
        </div>
      ) : null}
    </>
  );
};

export default CommentCard;
