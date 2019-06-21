import React from "react";
import logo from "../pokemon/logo.png";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
          href="#/"
        >
          <img src={logo} style={{ width: "40%" }} alt="" />
          &nbsp; The OG 150
        </a>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
