import React, { useState, useEffect } from "react";
import UserManager from "../../modules/UserRetrieve";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

const NavBar = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);

  const getUser = () => {
    UserManager.getCurrentUser().then((resp) => setCurrentUser(resp[0]));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Navbar
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(157,21,21,1) 36%, rgba(201,205,236,1) 54%, rgba(0,0,0,1) 97%)",
      }}
      expand="md"
    >
      <NavbarBrand style={{ color: "black" }} href="/">
        KickdUp
      </NavbarBrand>
      <Nav className="mr-auto" navbar>
        {currentUser !== undefined ? (
          currentUser.detail === "Invalid token." ? null : (
            <>
              <NavItem
                onClick={() => {
                  props.history.push(`/users/${currentUser.id}`);
                }}
              >
                Your Profile
              </NavItem>
              <NavItem
                onClick={() => {
                  sessionStorage.clear();
                  props.history.push("/");
                }}
              >
                Logout
              </NavItem>
            </>
          )
        ) : (
          <NavItem onClick={() => props.history.push("/login")}>Login</NavItem>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
