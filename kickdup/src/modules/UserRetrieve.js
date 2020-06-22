const baseUrl = "http://127.0.0.1:8000";

const UserManager = {
  userRetrieve(user_id) {
    return fetch(`${baseUrl}/users/${user_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(),
    }).then((resp) => resp.json());
  },
  getCurrentUser() {
    return fetch(`${baseUrl}/users`, {
      method: "GET",
      headers: {
        Authorization: `Token ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(),
    }).then((resp) => resp.json())
  }
};

export default UserManager;
