import React, { useState, useEffect } from "react";
import UserManager from "../../modules/UserRetrieve";

const NavBar = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);

  const getUser = () => {
    UserManager.getCurrentUser().then((resp) => setCurrentUser(resp[0]));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <header>
      <h2>KickdUp</h2>
      {currentUser !== undefined ? (
        currentUser.detail === "Invalid token." ? null : (
          <button
            onClick={() => props.history.push(`/users/${currentUser.id}`)}
          >
            YourProfile
          </button>
        )
      ) : (
        <button onClick={() => props.history.push("/login")}>Login</button>
      )}
    </header>
  );
};

export default NavBar;
