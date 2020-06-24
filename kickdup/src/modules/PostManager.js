const baseUrl = "http://127.0.0.1:8000";

const PostManager = {
  getAll() {
    return fetch(`${baseUrl}/posts`).then((resp) => resp.json());
  },
  getFilteredByUser(user_id) {
    return fetch(`${baseUrl}/posts?user=${user_id}`).then((resp) =>
      resp.json()
    );
  },
  getOne(id) {
    return fetch(`${baseUrl}/posts/${id}`).then((resp) => resp.json());
  },
  post(newPost) {
    return fetch(`${baseUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(newPost),
    }).then((resp) => resp.json());
  },
  editPost(post_id, description) {
    return fetch(`${baseUrl}/posts/${post_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify({ description: description }),
    });
  },
  deletePost(post_id) {
    return fetch(`${baseUrl}/posts/${post_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    });
  },
};

export default PostManager;
