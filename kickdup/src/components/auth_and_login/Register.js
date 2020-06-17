import React, { useState } from "react";
import AuthManager from "../../modules/AuthManager"

const Register = ({ routerProps }) => {
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

  const handleRegister = (e) => {
    e.preventDefault();
    const customerCreds = {
      username: credentials.username,
      email: credentials.email,
      password: credentials.password,
    };

    return AuthManager.register(customerCreds).then(resp => {
        console.log(resp)
        if ("token" in resp) {
            sessionStorage.setItem("token", resp.token);
            setLoggedIn(true)
        }
    }).then(() => routerProps.history.push("/"))

  };

  return (
    <div>
      <section>
        <form onSubmit={handleRegister}>
          <h1>Create a new account</h1>
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
            <label htmlFor="email">Email</label>
            <input
              onChange={handleFieldChange}
              type="text"
              id="email"
              placeholder="Email"
              value={credentials.email}
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
          <fieldset>
              <button type="Submit">Register</button>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Register
