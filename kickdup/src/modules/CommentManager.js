const baseUrl = "http://127.0.0.1:8000";

const CommentManager = {
  getForPost(post_id) {
    return fetch(`${baseUrl}/comments?post=${post_id}`).then((resp) =>
      resp.json()
    );
  },
  getComment(comment_id) {
    return fetch(`${baseUrl}/comments/${comment_id}`).then((resp) =>
      resp.json()
    );
  },
  post(newComment) {
    return fetch(`${baseUrl}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(newComment),
    }).then((resp) => resp.json());
  },
  delete(comment_id) {
    return fetch(`${baseUrl}/comments/${comment_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
    });
  },
  editComment(comment_id, cont) {
    return fetch(`${baseUrl}/comments/${comment_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify({ content: cont }),
    });
  },
};

export default CommentManager;
