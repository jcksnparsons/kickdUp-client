const baseUrl = "http://127.0.0.1:8000";

const CommentManager = {
  getForPost(post_id) {
    return fetch(`${baseUrl}/comments`)
      .then((resp) => resp.json())
      .then((comments) => comments.filter((post) => (post.post_id = post_id)));
  },
  post(newComment) {
    return fetch(`${baseUrl}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify(newComment)
    }).then(resp => resp.json())
  }
};

export default CommentManager