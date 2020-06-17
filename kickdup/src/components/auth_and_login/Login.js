import React, { useState } from "react";
import AuthManager from "../../modules/AuthManager.js";

const Login = ({ routerProps }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });

  const handleFieldChange = (evt) => {
    const stateToChange = { ...creds };
    stateToChange[evt.target.id] = evt.target.value;
    setCreds(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const logInCreds = {
      username: creds.username,
      password: creds.password,
    };

    return AuthManager.login(logInCreds)
      .then((resp) => {
        if ("token" in resp) {
          sessionStorage.setItem("token", resp.token);
          setLoggedIn(true);
        }
      })
      .then(() => routerProps.history.push("/"));
  };

  return (
    <div>
      <section>
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <fieldset>
            <label htmlFor="username">Username</label>
            <input
              onChange={handleFieldChange}
              type="text"
              id="username"
              placeholder="Username"
              value={creds.username}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleFieldChange}
              type="password"
              id="password"
              placeholder="Password"
              value={creds.password}
            />
          </fieldset>
          <fieldset>
            <button type="Submit">Register</button>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Login