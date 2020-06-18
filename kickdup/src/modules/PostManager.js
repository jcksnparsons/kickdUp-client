const baseUrl = "http://127.0.0.1:8000";

const PostManager = {
  getAll() {
    return fetch(`${baseUrl}/posts`).then((resp) => resp.json());
  },
  getFilteredByUser(user_id) {
    return fetch(`${baseUrl}/posts`)
      .then((resp) => resp.json())
      .then((posts) => posts.filter((post) => (post.user_id = user_id)));
  },
};

export default PostManager
