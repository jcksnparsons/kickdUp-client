import React, { useState, useEffect } from "react";
import PhotoManager from "../../modules/PhotoManager";
import { Card, CardTitle, CardText, UncontrolledTooltip } from "reactstrap";

const PostCard = (props) => {
  const [firstPhoto, setFirstPhoto] = useState({ image: null });

  const getPhoto = () => {
    PhotoManager.getPhotosForPost(props.post.id).then((resp) =>
      setFirstPhoto(resp[0])
    );
  };

  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <div style={{margin: '.5rem'}}>
      <Card body>
        {firstPhoto ? (
          <div
            onClick={() =>
              props.routerProps.history.push(`/posts/${props.post.id}`)
            }
          >
            <img src={firstPhoto.image} alt="photo" height="auto" width="180" />{" "}
          </div>
        ) : null}
        <br />
        <CardText
          onClick={() =>
            props.routerProps.history.push(`/users/${props.post.user_id}`)
          }
        >
          <span id="username">
            <em>{props.post.user.username}</em>
          </span>
          <UncontrolledTooltip target="username">
            Click here to go to {props.post.user.username}'s profile
          </UncontrolledTooltip>
        </CardText>
        <CardTitle>
          {props.post.manufacturer.name} {props.post.model}
        </CardTitle>
      </Card>
    </div>
  );
};

export default PostCard;
