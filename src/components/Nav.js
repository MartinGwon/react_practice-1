import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <Link to="/home" className="button">
        Home
      </Link>
      <Link to="/" className="button">
        About
      </Link>
    </div>
  );
}

export default Nav;
