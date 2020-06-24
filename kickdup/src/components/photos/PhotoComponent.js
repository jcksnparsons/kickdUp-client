import React from "react";

const PhotoComponent = (props) => {
  return (
    <>
      <img src={props.photo.image} alt="photo" width="250" height="auto" />
      <div>
        <button onClick={() => props.deletePhoto(props.photo.id)}>
          Delete Photo
        </button>
      </div>
    </>
  );
};

export default PhotoComponent;
