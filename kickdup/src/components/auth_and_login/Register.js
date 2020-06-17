import React, { useState } from "react";

const Login = ({ routerProps }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const customerCreds = {
      username: credentials.username,
      password: credentials.password,
    };
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
              value={credentials.username}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleFieldChange}
              type="password"
              id="password"
              placeholder="Password"
              value={credentials.password}
            />
          </fieldset>
        </form>
      </section>
    </div>
  );
};
