const baseUrl = "http://127.0.0.1:8000";

const AuthManager = {
  login(userCreds) {
    return fetch(`${baseUrl}/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userCreds),
    }).then((resp) => resp.json());
  },
  register(user) {
    return fetch(`${baseUrl}/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    }).then((resp) => resp.json());
  },
};

export default AuthManager
