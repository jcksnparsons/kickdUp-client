import React, { useState, useEffect } from "react";
import PostManager from "../../modules/PostManager";

const PhotoComponent = (props) => {
  const [postInfo, setPostInfo] = useState(null);

  const getPost = () => {
    PostManager.getOne(props.photo.post_id).then((resp) => setPostInfo(resp));
  };

  const makeButtons = () => {
      if (postInfo !== null) {
        return (props.currentUser.id === postInfo.user_id ?
            <div>
              <button onClick={() => props.deletePhoto(props.photo.id)}>
                Delete Photo
              </button>
            </div>
         : null)
      }
  }

  useEffect(() => {
    getPost();
    console.log(postInfo);
  }, []);

  return (
    <>
      <img src={props.photo.image} alt="photo" width="250" height="auto" />
      {makeButtons()}
    </>
  );
};

export default PhotoComponent;
