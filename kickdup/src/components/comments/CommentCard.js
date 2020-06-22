import React from "react";
import UserManager from "../../modules/UserRetrieve";

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
      <h2>{props.comment.content}</h2>
      {verifyUser() ? (
        <button onClick={() => props.deleteComment(props.comment.id)}>
          Delete
        </button>
      ) : null}
    </>
  );
};

export default CommentCard;
