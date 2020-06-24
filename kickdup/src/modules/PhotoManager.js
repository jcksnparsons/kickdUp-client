const baseUrl = "http://127.0.0.1:8000";

const PhotoManager = {
  getPhotosForPost(postId) {
    return fetch(`${baseUrl}/photos?post=${postId}`).then((resp) =>
      resp.json()
    );
  },
  postPhoto(newPhoto) {
    return fetch(`${baseUrl}/photos`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      body: newPhoto,
    });
  },
  deletePhoto(photo_id) {
    return fetch(`${baseUrl}/photos/${photo_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    });
  },
};

export default PhotoManager;
