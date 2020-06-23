const baseUrl = "http://127.0.0.1:8000";

const PhotoManager = {
  postPhoto(newPhoto) {
    return fetch(`${baseUrl}/photos`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      body: newPhoto
    });
  },
};

export default PhotoManager