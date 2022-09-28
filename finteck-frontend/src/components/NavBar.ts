import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useHistory } from "react-router-dom";

function NavBar({ currentUser, resetCurrentUser }) {

    // const history = useHistory();

    function handleLogout() {
      resetCurrentUser(null)
    //   history.push("/");
  }

    return (
        "Hello from inside the navbar"
      );
}

export default NavBar;