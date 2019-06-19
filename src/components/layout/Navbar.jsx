import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
          href="#/"
        >
          Pokedex
        </a>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
