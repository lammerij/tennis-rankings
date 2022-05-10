import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "green",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "green",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/players"
        exact
        style={linkStyles}
        activeStyle={{
          background: "green",
        }}
      >
        Players
      </NavLink>
      <NavLink
        to="/addplayer"
        exact
        style={linkStyles}
        activeStyle={{
          background: "green",
        }}
      >
        Add Player
      </NavLink>
    </div>
  );
}

export default NavBar;
