import React from "react";
import UserManager from "../../modules/UserRetrieve";
import UpdateCommentForm from "./UpdateComment"

const CommentCard = (props) => {
  async function verifyUser() {
    const currentUserArray = await UserManager.getCurrentUser();
    const currentUser = currentUserArray[0];

    if (currentUser.id === props.comment.user_id) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <h4><em>{props.comment.user.username}</em></h4>
      <h2>{props.comment.content}</h2>
      {verifyUser() ? (
        <div>
          <button onClick={() => props.routerProps.history.push(`/comments/${props.comment.id}/edit`)}>Edit</button>
          <button onClick={() => props.deleteComment(props.comment.id)}>
            Delete
          </button>
        </div>
      ) : null}
    </>
  );
};

export default CommentCard;
