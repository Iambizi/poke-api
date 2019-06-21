import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";

import backgroundImage from "./pattern.png";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App" style={{ background: `url(${backgroundImage})` }}>
        <Navbar />
        <div className="container">
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
