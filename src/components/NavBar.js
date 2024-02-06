import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
      <NavLink to="/" exact style={linkStyles} activeStyle={activeLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/movies" exact style={linkStyles} activeStyle={activeLinkStyles}>
        Movies
      </NavLink>
      <NavLink to="/directors" exact style={linkStyles} activeStyle={activeLinkStyles}>
        Directors
      </NavLink>
      <NavLink to="/actors" exact style={linkStyles} activeStyle={activeLinkStyles}>
        Actors
      </NavLink>
  </div>
  );
}

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

const activeLinkStyles = {
  background: "darkblue",
};

export default NavBar;
