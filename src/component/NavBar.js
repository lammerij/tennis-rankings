import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "white",
  textDecoration: "none",
  color: "green",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/players"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white",
        }}
      >
        Players
      </NavLink>
      <NavLink
        to="/players/new"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white",
        }}
      >
        Add Player
      </NavLink>
      <NavLink
        to="/players/favoriteplayers"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white",
        }}
      >
        Favorite Players
      </NavLink>
    </div>
  );
}

export default NavBar;
