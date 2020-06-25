import React, { useState, useEffect } from "react";
import UserManager from "../../modules/UserRetrieve";

const NavBar = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  const getUser = () => {
    UserManager.getCurrentUser().then((resp) => setCurrentUser(resp));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <header>
      <h2>KickdUp</h2>
      {currentUser !== null ? (
        currentUser.detail === "Invalid token." ? (
          <button>Login</button>
        ) : (
          <button>YourProfile</button>
        )
      ) : null}
    </header>
  );
};

export default NavBar;
