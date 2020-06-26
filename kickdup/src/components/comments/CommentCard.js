import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  UncontrolledTooltip,
  CardSubtitle,
  Button,
} from "reactstrap";

const CommentCard = (props) => {
  return (
    <div>
      <Card style={{ width: "60%", padding: ".5rem" }}>
        <CardSubtitle
          onClick={() =>
            props.routerProps.history.push(`/users/${props.comment.user_id}`)
          }
        >
          <em>{props.comment.user.username}</em>
        </CardSubtitle>
        <CardTitle>{props.comment.content}</CardTitle>
        {props.currentUser !== null &&
        props.currentUser.id === props.comment.user_id ? (
          <div>
            <Button
              onClick={() =>
                props.routerProps.history.push(
                  `/comments/${props.comment.id}/edit`
                )
              }
            >
              Edit
            </Button>
            <Button onClick={() => props.deleteComment(props.comment.id)}>
              Delete
            </Button>
          </div>
        ) : null}
      </Card>
    </div>
  );
};

export default CommentCard;
