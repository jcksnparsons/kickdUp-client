import React, { useState, useEffect } from "react";
import PhotoManager from "../../modules/PhotoManager";

const PostCard = (props) => {
  console.log(props)
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
    <>
      {firstPhoto ? (
        <img src={firstPhoto.image} alt="photo" height="auto" width="180" />
      ) : null}
      <p>{props.post.manufacturer.name}</p>
      <p>{props.post.model}</p>
    </>
  );
};

export default PostCard;
