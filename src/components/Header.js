import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ display: "flex", padding: "2rem" }}>
      <NavLink style={{ marginLeft: "2rem" }} to="/">
        Home
      </NavLink>
      <NavLink style={{ marginLeft: "2rem" }} to="/search">
        Search
      </NavLink>
    </div>
  );
};

export default Header;
