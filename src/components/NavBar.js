import React from "react";
import logo from "../images/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="C.R.I. Fluid System" />
      </div>
    </nav>
  );
};

export default Navbar;
