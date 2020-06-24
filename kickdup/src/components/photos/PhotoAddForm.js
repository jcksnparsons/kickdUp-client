import React, { useState, useEffect } from "react";
import PhotoManager from "../../modules/PhotoManager";

const PhotoAddForm = (props) => {
  const [photo, setPhoto] = useState({
    image: "",
    post_id: 0,
  });

  const handleFileUpload = (e) => {
    setPhoto({
      imageFile: e.target.files[0],
      imagePath: e.target.files[0].name,
      post_id: parseInt(props.routerProps.match.params.postId),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", photo.imageFile, photo.imagePath);
    formData.append("post_id", photo.post_id);

    PhotoManager.postPhoto(formData).then(() =>
      props.routerProps.history.push(`/posts/${props.routerProps.match.params.postId}`)
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Upload an image</h1>
        <div>
          <input
            type="file"
            accept="image/"
            id="image"
            onChange={handleFileUpload}
          />
          <label htmlFor="imagePath">
              {photo.imagePath}
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default PhotoAddForm;
